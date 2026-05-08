# Find and show the tab bar area
$content = Get-Content 'C:\Users\bichenxi\echoes_phone\src\components\Music.jsx' -Raw -Encoding UTF8
if ($content -match '(.{200})\s*<button[^>]*setMusicTab\("playlist"\)[^<]{10,200}</button>\s*</div>') {
    $match = $Matches[0]
    Write-Output "Found tab bar area, length=$($match.Length)"
    Write-Output $match
} else {
    Write-Output "Tab bar pattern not found"
}

# Show lines around showQuickReply
$lines = $content -split "`n"
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'showQuickReply') {
        Write-Output "showQuickReply at line $i"
        for ($j = [Math::Max(0,$i-5); $j -lt [Math::Min($lines.Count,$i+3); $j++) {
            Write-Output "  $j`: $($lines[$j])"
        }
    }
}
