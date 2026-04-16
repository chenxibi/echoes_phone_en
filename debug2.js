import { readFileSync } from 'fs';

const src = readFileSync('C:/Users/bichenxi/echoes_phone_en/src/App.jsx', 'utf8');
const lines = src.split('\n');

// Check lines 503 specifically - what character is at column 8?
// Line 503 (index 502): "        );"
console.log('Line 503 exact:', JSON.stringify(lines[502]));
console.log('Line 503 chars:');
for (let i = 0; i < lines[502].length; i++) {
  const c = lines[502][i];
  const code = lines[502].charCodeAt(i);
  console.log(`  [${i}] U+${code.toString(16).toUpperCase().padStart(4,'0')} = ${JSON.stringify(c)}`);
}

// Now check: is there a backtick RIGHT BEFORE the } on line 502?
// Line 502 is: "          }`),"
// In UTF-8, that's: 10 spaces, }, backtick, ), comma
console.log('\nLine 502 full:', lines[502]);
const line502 = lines[502];
// Check if line 502 ends with `),  and has ONLY the } and ` and ) and ,
console.log('Line 502 trimmed:', JSON.stringify(line502.trim()));
console.log('Line 502 starts with spaces?', line502.startsWith('          '));

// The key question: what if the backtick is actually MISSING from line 502?
// Let's look at the raw bytes around the } on line 502
import { readFileSync as rf } from 'fs';
const raw = rf('C:/Users/bichenxi/echoes_phone_en/src/App.jsx', null)[0];
const rawLines = raw.split(Buffer.from('\n'));
console.log('\nRaw line 502 bytes:', rawLines[501].toString('hex'));
console.log('Raw line 502:', rawLines[501]);

// Now let's just count total backticks in the file
const tickMatches = src.match(/\x60/g) || [];
console.log('\nTotal backticks:', tickMatches.length);
