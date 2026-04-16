with open(r'C:\Users\bichenxi\echoes_phone_en\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the extra ) in Events console.log
# Current:          ")"),
# Should be:          ")",
old = '          ")"),\n        );'
new_str = '          ")",\n        );'
if old in content:
    content = content.replace(old, new_str)
    print('Fixed!')
else:
    print('Not found, trying alternative')
    # Try with escaped paren
    old2 = '          ")"),\r\n        );'
    new2 = '          ")",\r\n        );'
    if old2 in content:
        content = content2.replace(old2, new2)
        print('Fixed with CRLF!')

with open(r'C:\Users\bichenxi\echoes_phone_en\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
