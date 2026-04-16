with open(r'C:\Users\bichenxi\echoes_phone_en\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Check what the Events block looks like
idx = content.find('[Echoes] Rolled back Events')
if idx >= 0:
    print(repr(content[idx:idx+200]))
