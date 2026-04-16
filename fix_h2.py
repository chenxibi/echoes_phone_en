# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\bichenxi\echoes_phone_en\src\utils\appHelpers.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('>删除<', '>Delete<'),
    ('>取消<', '>Cancel<'),
    ('>保存<', '>Save<'),
    ('描述角色特点，如"阳光开朗的青梅竹马"\n也可以直接输入喜欢的IP角色名字，如"Jason Todd - 红头罩"',
     'Describe character traits, e.g. cheerful childhood friend\nOr directly enter a favorite IP character name, e.g. Jason Todd - Red Hood'),
    ('<FileText size={10} /> 核心设定 (Raw Prompt)', '<FileText size={10} /> Core Settings (Raw Prompt)'),
    ('<MessageCircle size={10} /> 开场白 (First Message)', '<MessageCircle size={10} /> First Message'),
    ('<Shirt size={10} /> 服装', '<Shirt size={10} /> Outfit'),
    ('<Eye size={10} /> 行为', '<Eye size={10} /> Behavior'),
    ('<Heart size={10} /> 心声', '<Heart size={10} /> Thoughts'),
    ('<Ghost size={10} /> 坏心思', '<Ghost size={10} /> Secrets'),
    ('>退还<', '>Refund<'),
    ('>收款<', '>Receive<'),
]

count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        count += 1

print(f'Replaced {count}/{len(replacements)}')

with open(r'C:\Users\bichenxi\echoes_phone_en\src\utils\appHelpers.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
