# -*- coding: utf-8 -*-
with open(r'C:\Users\bichenxi\echoes_phone_en\src\utils\appHelpers.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the corrupted section
start_marker = '    clean = clean.replace(/([\\{\\,\\[]\\s*)"/g, "$1" + TEMP_Q);'
idx_start = content.find(start_marker)
section = content[idx_start:]
lines = section.split('\n')
print('Lines 0-11 of section:')
for i in range(min(12, len(lines))):
    print(f'{i}: {repr(lines[i])}')
