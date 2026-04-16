import acorn from 'acorn';
import { readFileSync } from 'fs';

const code = `const x = 1;
    console.log(
      \`[Echoes] Rolled back User Facts (\${
        prev.length - filtered.length
      })\`),
    );
    if (true) {}
`;

try {
  acorn.parse(code, { ecmaVersion: 2022, sourceType: 'module' });
  console.log('Test code: OK');
} catch(e) {
  console.log('Test code error:', e.message, 'at line', e.loc.line, 'col', e.loc.column);
}

// Now test the actual file
try {
  const src = readFileSync('C:/Users/bichenxi/echoes_phone_en/src/App.jsx', 'utf8');
  acorn.parse(src, { ecmaVersion: 2022, sourceType: 'module', plugins: { jsx: true } });
  console.log('File: OK');
} catch(e) {
  console.log('File error:', e.message, 'at line', e.loc.line, 'col', e.loc.column);
}
