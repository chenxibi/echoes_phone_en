# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open(r'C:\Users\bichenxi\echoes_phone\src\components\Music.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Check lines 555-578
for i in range(555, min(578, len(lines))):
    print(f"{i}: {lines[i].rstrip()}")
