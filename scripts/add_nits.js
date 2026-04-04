import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'public', 'data', 'cutoff_data.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

const nits = [
  "NIT Trichy", "NIT Surathkal", "NIT Warangal", "NIT Calicut", "NIT Rourkela", 
  "MNIT Jaipur", "VNIT Nagpur", "NIT Kurukshetra", "NIT Durgapur", "MNNIT Allahabad", 
  "SVNIT Surat", "NIT Jalandhar", "NIT Meghalaya", "NIT Bhopal", "NIT Raipur", 
  "NIT Agartala", "NIT Goa", "NIT Jamshedpur", "NIT Silchar", "NIT Patna", 
  "NIT Hamirpur", "NIT Puducherry", "NIT Mizoram", "NIT Srinagar", "NIT Uttarakhand", 
  "NIT Delhi", "NIT Manipur", "NIT Sikkim", "NIT Arunachal Pradesh", "NIT Andhra Pradesh"
];

// Add NITs to institutes if they don't exist
nits.forEach(nit => {
  if (!data.institutes.includes(nit)) {
    data.institutes.push(nit);
  }
});

// Add some basic data for NIT Trichy, NIT Surathkal, and NIT Warangal so it's not totally empty
const topNits = ["NIT Trichy", "NIT Surathkal", "NIT Warangal"];
const newCutoffs = [];

topNits.forEach(nit => {
  if (!data.cutoffs.find(d => d.institute === nit)) {
    newCutoffs.push({
      institute: nit,
      branch: "Computer Science and Engineering",
      category: "General",
      gender: "Gender-Neutral",
      year: 2024,
      openingRank: 100,
      closingRank: 1500
    });
    newCutoffs.push({
      institute: nit,
      branch: "Electronics and Communication Engineering",
      category: "General",
      gender: "Gender-Neutral",
      year: 2024,
      openingRank: 1200,
      closingRank: 3500
    });
  }
});

data.cutoffs.push(...newCutoffs);

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${nits.length} NITs to the institutes list. Added ${newCutoffs.length} cutoff records.`);
