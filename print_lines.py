with open(r'C:\Users\bichenxi\echoes_phone\src\components\Music.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()
for i in range(573, 588):
    print(f'{i}: {repr(lines[i])}')
