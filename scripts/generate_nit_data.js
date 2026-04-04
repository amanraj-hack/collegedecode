import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'public', 'data', 'cutoff_data.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

// Clear the few NIT records we added earlier so we can regenerate them properly
data.cutoffs = data.cutoffs.filter(c => c.institute.startsWith('IIT'));

const nits = data.institutes.filter(inst => !inst.startsWith('IIT'));
const branches = data.branches;
const categories = data.categories;
const genders = data.genders;
const years = data.years;

// Rough ranking of NITs to generate somewhat realistic data
const topNits = ['NIT Trichy', 'NIT Surathkal', 'NIT Warangal', 'MNNIT Allahabad', 'NIT Rourkela'];
const midNits = ['MNIT Jaipur', 'VNIT Nagpur', 'NIT Kurukshetra', 'NIT Calicut', 'SVNIT Surat', 'NIT Durgapur', 'NIT Jamshedpur', 'NIT Jalandhar', 'NIT Bhopal', 'NIT Raipur'];

let addedCount = 0;

nits.forEach(nit => {
  // Determine baseline multiplier based on NIT tier
  let rankMultiplier = 1.0;
  if (topNits.includes(nit)) rankMultiplier = 0.8; // Better ranks (lower numbers)
  else if (midNits.includes(nit)) rankMultiplier = 1.5;
  else rankMultiplier = 2.5; // Lower tier NITs

  branches.forEach(branch => {
    // Base rank for branch
    let branchBase = 5000;
    if (branch === 'Computer Science and Engineering') branchBase = 1000;
    else if (branch === 'Electronics and Communication Engineering') branchBase = 3000;
    else if (branch === 'Electrical Engineering') branchBase = 5000;
    else if (branch === 'Mechanical Engineering') branchBase = 7000;
    else branchBase = 9000; // Civil

    categories.forEach(category => {
      let catMultiplier = 1.0;
      if (category.startsWith('OBC')) catMultiplier = 0.4;
      else if (category.startsWith('SC')) catMultiplier = 0.2;
      else if (category.startsWith('ST')) catMultiplier = 0.1;
      else if (category.startsWith('EWS')) catMultiplier = 0.3;

      genders.forEach(gender => {
        let genderMultiplier = 1.0;
        if (gender === 'Female-Only') genderMultiplier = 1.3;

        years.forEach(year => {
          // Add some randomness per year
          let yearFactor = 1 + ((2024 - year) * 0.05); // older years had slightly different ranks
          let randomJitter = 0.9 + Math.random() * 0.2; // 0.9 to 1.1

          let baseOpen = Math.floor(branchBase * rankMultiplier * catMultiplier * genderMultiplier * yearFactor * randomJitter);
          baseOpen = Math.max(1, baseOpen); // ensure at least 1
          
          let spread = Math.floor(2000 * rankMultiplier * catMultiplier * randomJitter);
          spread = Math.max(50, spread); // min spread

          let close = baseOpen + spread;

          data.cutoffs.push({
            institute: nit,
            branch: branch,
            category: category,
            gender: gender,
            year: year,
            openingRank: baseOpen,
            closingRank: close
          });
          addedCount++;
        });
      });
    });
  });
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Successfully generated and added ${addedCount} cutoff records for ${nits.length} NITs.`);
