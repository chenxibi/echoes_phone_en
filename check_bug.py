lines = open(r'C:\Users\bichenxi\echoes_phone_en\src\utils\appHelpers.jsx', 'r', encoding='utf-8').readlines()
line = lines[111]
print('full line:', repr(line))
print('length:', len(line))
for i, c in enumerate(line):
    if i > 50:
        print(f'  [{i}]: {repr(c)} (ord={ord(c)})')
