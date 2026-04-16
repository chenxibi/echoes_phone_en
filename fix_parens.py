# -*- coding: utf-8 -*-
with open(r'C:\Users\bichenxi\echoes_phone_en\src\App.jsx', 'rb') as f:
    content = f.read()

# Fix missing ) before ` in template literals - file uses CRLF line endings
old1 = b'[Echoes] Rolled back User Facts (${\r\n            prev.length - filtered.length\r\n          }\']),'
new1 = b'[Echoes] Rolled back User Facts (${\r\n            prev.length - filtered.length\r\n          })\']),'
old2 = b'[Echoes] Rolled back Char Facts (${\r\n            prev.length - filtered.length\r\n          }\']),'
new2 = b'[Echoes] Rolled back Char Facts (${\r\n            prev.length - filtered.length\r\n          })\']),'

replaced = 0
if old1 in content:
    content = content.replace(old1, new1)
    replaced += 1
    print('Fixed User Facts')
if old2 in content:
    content = content.replace(old2, new2)
    replaced += 1
    print('Fixed Char Facts')
print(f'Total: {replaced}')

with open(r'C:\Users\bichenxi\echoes_phone_en\src\App.jsx', 'wb') as f:
    f.write(content)
