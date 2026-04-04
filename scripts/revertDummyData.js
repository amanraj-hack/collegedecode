import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'public', 'data', 'cutoff_data.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

// The previous script added exactly 5480 dummy records to the end of the array.
// We can just remove the last 5480 records to perfectly restore the file.
const dummyCount = 5480;
const originalLength = data.cutoffs.length - dummyCount;

if (data.cutoffs.length >= dummyCount) {
  data.cutoffs = data.cutoffs.slice(0, originalLength);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`Successfully reverted to authentic data. Restored ${data.cutoffs.length} authentic records and removed ${dummyCount} dummy records.`);
} else {
  console.log('Error: Not enough records to remove.');
}
