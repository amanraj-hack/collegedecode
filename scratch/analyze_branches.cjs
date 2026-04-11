const fs = require('fs');
const path = require('path');

const dataDir = 'd:\\WORKSPACE\\collegedecode\\public\\data';
const files = ['OCR_2021.json', 'OCR_2022.json', 'OCR_2023.json', 'OCR_2024.json', 'OCR_2025.json'];

const branchStats = {};
let totalRecords = 0;

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.forEach(record => {
      let branch = record.branch.trim();
      // Basic normalization: remove trailing parentheses text if any, or keep it short
      // For now, let's just use the full string to be accurate to the data
      branchStats[branch] = (branchStats[branch] || 0) + 1;
      totalRecords++;
    });
  }
});

const sortedBranches = Object.entries(branchStats)
  .map(([name, count]) => ({
    name,
    count,
    percentage: ((count / totalRecords) * 100).toFixed(2) + '%'
  }))
  .sort((a, b) => b.count - a.count);

console.log(`Total Records Processed: ${totalRecords}`);
console.log('Top 20 Branches by Frequency:');
console.table(sortedBranches.slice(0, 20));
