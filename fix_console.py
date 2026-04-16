with open(r'C:\Users\bichenxi\echoes_phone_en\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the three problematic console.log blocks with simpler string concat
# Block 1: User Facts
old1 = '''        console.log(
          `[Echoes] Rolled back User Facts (${
            prev.length - filtered.length
          }`),
        );'''
new1 = '''        console.log(
          "[Echoes] Rolled back User Facts (" +
          (prev.length - filtered.length) +
          ")",
        );'''

# Block 2: Char Facts
old2 = '''        console.log(
          `[Echoes] Rolled back Char Facts (${
            prev.length - filtered.length
          }`),
        );'''
new2 = '''        console.log(
          "[Echoes] Rolled back Char Facts (" +
          (prev.length - filtered.length) +
          ")",
        );'''

# Block 3: Shared Events
old3 = '''        console.log(
          `[Echoes] Rolled back Events (${prev.length - filtered.length}`),
        );'''
new3 = '''        console.log(
          "[Echoes] Rolled back Events (" +
          (prev.length - filtered.length) +
          ")"),
        );'''

count = 0
if old1 in content:
    content = content.replace(old1, new1)
    count += 1
    print('Fixed User Facts')
if old2 in content:
    content = content.replace(old2, new2)
    count += 1
    print('Fixed Char Facts')
if old3 in content:
    content = content.replace(old3, new3)
    count += 1
    print('Fixed Events')
print(f'Total: {count}/3')

with open(r'C:\Users\bichenxi\echoes_phone_en\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
