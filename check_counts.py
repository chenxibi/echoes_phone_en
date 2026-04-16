with open(r'C:\Users\bichenxi\echoes_phone_en\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Count backticks
tick_count = content.count('\x60')
print(f'Total backticks: {tick_count}')

# Count dollar-brace expressions
dollar_count = content.count('${')
print(f'Total dollar-brace expressions: {dollar_count}')

# Count curly braces for basic balance
open_braces = content.count('{')
close_braces = content.count('}')
print(f'Open braces: {open_braces}, Close braces: {close_braces}, Diff: {open_braces - close_braces}')

# Count parens
open_parens = content.count('(')
close_parens = content.count(')')
print(f'Open parens: {open_parens}, Close parens: {close_parens}, Diff: {open_parens - close_parens}')
