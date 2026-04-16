# -*- coding: utf-8 -*-
with open(r'C:\Users\bichenxi\echoes_phone_en\src\utils\appHelpers.jsx', 'rb') as f:
    content = f.read()

# Find the corrupted section - it starts with the line containing \.,!\?
idx = content.find(b'\\.,!\\?])')
print(f'Found corrupted at byte {idx}')
print('Context:', repr(content[idx:idx+50]))

# The correct replacement - use the original JavaScript code
# We need the exact bytes for the original 5 lines of JavaScript:
# Line 1: clean = clean.replace(/([，。！？…、\.,!\?])"/g, "$1"");
# Line 2: clean = clean.replace(/"(?=\s*[，。！？…、\.,!\?])/g, """);
# Line 3: blank
# Line 4: clean = clean.replace(/([\u4e00-\u9fa5])"([\u4e00-\u9fa5])/g, "$1"$2");
# Line 5: blank
# Line 6: clean = clean.replace(/"(?=[\u4e00-\u9fa5])/g, """);
# Line 7: blank
# Line 8: clean = clean.replace(/([\u4e00-\u9fa5])"(?!\s*[:,\}\]])/g, "$1"");
# But note: in the original source, the Chinese chars were written as Unicode escapes
# Let me look at what's BEFORE the corrupted section to understand the format

# Find the line before the corruption
before_idx = content.rfind(b'\n', 0, idx)
line_before = content[before_idx:idx]
print('Line before:', repr(line_before))

# The start of this block is: clean = clean.replace(/([\{
# after which comes the TEMP_Q section
# So the corruption is within the curly-quote handling section
# Let me find where this section starts and ends

# Look for the blank line before line 1 of the corruption
search_start = idx - 500
segment = content[search_start:idx+400]
print('Segment hex around corruption:')
print(segment[max(0,50):200].hex())
