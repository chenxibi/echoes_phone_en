import { readFileSync } from 'fs';

const src = readFileSync('C:/Users/bichenxi/echoes_phone_en/src/App.jsx', 'utf8');
const lines = src.split('\n');

// Show exact content of lines around the error
console.log('=== Lines 499-508 ===');
for (let i = 498; i <= 508; i++) {
  const line = lines[i];
  console.log(`Line ${i+1} (len=${line.length}): ${JSON.stringify(line)}`);
  // Check for unusual chars
  for (let j = 0; j < line.length; j++) {
    const code = line.charCodeAt(j);
    if (code > 127 || code < 32) {
      console.log(`  -> UNUSUAL char at pos ${j}: U+${code.toString(16).toUpperCase().padStart(4,'0')} = ${line[j]}`);
    }
  }
}

// Now check the actual Vite/Babel parse
console.log('\n=== Checking template literal structure ===');
// Find the specific console.log blocks
const re = /console\.log\(\s*\n?\s*`\[Echoes\] Rolled back User Facts/;
const match = src.match(re);
if (match) {
  console.log('Found User Facts console.log at:', match.index);
  const snippet = src.slice(match.index, match.index + 200);
  console.log('Snippet:', JSON.stringify(snippet));
}
