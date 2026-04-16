import { readFileSync } from 'fs';

const src = readFileSync('C:/Users/bichenxi/echoes_phone_en/src/App.jsx', 'utf8');

// Find all console.log statements with template literals containing 'Rolled back'
const regex = /console\.log\(\s*`[^`]*`\s*\)/g;
let match;
let found = [];
while ((match = regex.exec(src)) !== null) {
  found.push({ pos: match.index, text: match[0].slice(0, 80) });
}
console.log(`Found ${found.length} template-literal console.log calls`);
found.forEach((f, i) => console.log(`${i+1}. ${f.text}`));

// Check for unbalanced braces/parens/ticks in the file
let ticks = 0, parens = 0, brackets = 0, braces = 0;
let inSingleQuote = false, inDoubleQuote = false, inTemplate = false, templateDepth = 0;
let line = 1, col = 0;
let issues = [];

for (let i = 0; i < src.length; i++) {
  const ch = src[i];
  if (ch === '\n') { line++; col = 0; continue; }
  col++;
  
  if (inTemplate) {
    if (ch === '\\') { i++; continue; }
    if (ch === '`') { inTemplate = false; ticks--; }
    else if (ch === '${') { templateDepth++; }
    else if (ch === '}') { templateDepth--; }
    continue;
  }
  
  if (ch === '`') { inTemplate = true; ticks++; continue; }
  if (ch === "'" && !inDoubleQuote) { inSingleQuote = !inSingleQuote; continue; }
  if (ch === '"' && !inSingleQuote) { inDoubleQuote = !inDoubleQuote; continue; }
  if (inSingleQuote || inDoubleQuote) continue;
  
  if (ch === '(') parens++;
  else if (ch === ')') parens--;
  else if (ch === '[') brackets++;
  else if (ch === ']') brackets--;
  else if (ch === '{') braces++;
  else if (ch === '}') braces--;
}

console.log(`\nBrackets: ${brackets}, Parens: ${parens}, Braces: ${braces}, Ticks: ${ticks}`);
if (brackets !== 0 || parens !== 0 || braces !== 0 || ticks !== 0) {
  console.log('UNBALANCED!');
}
