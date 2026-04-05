const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../public/data');
const METADATA_FILE = path.join(DATA_DIR, 'cutoff_metadata.json');

const files = fs.readdirSync(DATA_DIR).filter(f => 
  (f.startsWith('iit_y') || f.startsWith('nit_y')) && f.endsWith('.json') && f !== 'cutoff_data.json' && !f.startsWith('OCR_') && f !== 'cutoff_metadata.json'
);

console.log(`Found ${files.length} files to process.`);

const metadata = {
  institutes: new Set(),
  branches: new Set(),
  categories: new Set(),
  genders: new Set(),
  years: new Set()
};

// Group cutoffs by year
const cutoffsByYear = {};

function cleanBranchName(name) {
  if (!name) return 'Unknown Branch';
  return name.replace(/\s*\([^)]*\)/g, '').trim();
}

function standardizeCategory(cat) {
  if (cat === 'OPEN') return 'General';
  if (cat === 'OPEN (PwD)') return 'General-PwD';
  return cat || 'General';
}

function standardizeGender(gender) {
  if (!gender) return 'Gender-Neutral';
  if (gender.includes('Female')) return 'Female-Only';
  if (gender.includes('Gender-Neutral')) return 'Gender-Neutral';
  return gender;
}

files.forEach(file => {
  try {
    const match = file.match(/(iit|nit)_y(\d+)_r(\d+)\.json/);
    if (!match) return;

    const isIIT = match[1] === 'iit';
    const year = parseInt(`20${match[2]}`, 10);
    const filePath = path.join(DATA_DIR, file);
    const rawContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const rawData = rawContent.data || [];

    console.log(`Processing ${file} (${rawData.length} records)...`);

    if (!cutoffsByYear[year]) cutoffsByYear[year] = [];

    rawData.forEach((row) => {
      const openingStr = String(row['Opening Rank'] || '').trim();
      const closingStr = String(row['Closing Rank'] || '').trim();

      const quota = String(row['Quota'] || '').trim();
      if (!isIIT && quota !== 'OS') return;

      if (!openingStr || !closingStr) return;
      if (openingStr.endsWith('P') || closingStr.endsWith('P')) return;

      const openingRank = parseInt(openingStr.replace(/,/g, ''), 10);
      const closingRank = parseInt(closingStr.replace(/,/g, ''), 10);

      if (isNaN(openingRank) || isNaN(closingRank)) return;

      const institute = (row['Institute'] || 'Unknown Institute').trim();
      const branch = cleanBranchName(row['Academic Program Name']);
      const category = standardizeCategory(row['Seat Type']);
      const gender = standardizeGender(row['Gender']);

      metadata.institutes.add(institute);
      metadata.branches.add(branch);
      metadata.categories.add(category);
      metadata.genders.add(gender);
      metadata.years.add(year);

      cutoffsByYear[year].push({
        institute,
        branch,
        category,
        gender,
        year,
        openingRank,
        closingRank
      });
    });
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
});

// Save Metadata
const finalMetadata = {
  institutes: Array.from(metadata.institutes).sort(),
  branches: Array.from(metadata.branches).sort(),
  categories: Array.from(metadata.categories).sort(),
  genders: Array.from(metadata.genders).sort(),
  years: Array.from(metadata.years).sort((a, b) => b - a)
};

fs.writeFileSync(METADATA_FILE, JSON.stringify(finalMetadata), 'utf8');
console.log(`Saved metadata to ${METADATA_FILE}`);

// Save yearly files
Object.keys(cutoffsByYear).forEach(year => {
  const outputFile = path.join(DATA_DIR, `OCR_${year}.json`);
  fs.writeFileSync(outputFile, JSON.stringify(cutoffsByYear[year]), 'utf8');
  console.log(`Saved ${cutoffsByYear[year].length} records to ${outputFile}`);
});

console.log('Aggregation complete.');
