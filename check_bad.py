with open(r'C:\Users\bichenxi\echoes_phone_en\src\utils\appHelpers.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Check what lines 106-110 look like
lines = content.split('\n')
for i in range(104, 111):
    print(f'Line {i+1}: {repr(lines[i])}')
