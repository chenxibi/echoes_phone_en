const fs = require('fs');
let c = fs.readFileSync('C:/Users/bichenxi/echoes_phone/src/components/Music.jsx', 'utf8');
let changed = false;

// STEP A: Find and replace tab bar - more flexible matching
// Find the tab bar area by looking for the pattern
const oldTabRe = /(\s*<button[^>]*>.*?setMusicTab\("playlist"\).*?<\/button>\s*<\/div>)/s;
const match = c.match(oldTabRe);
if (match) {
    console.log('Found tab bar, replacing...');
    const newTab = match[1].replace('</button>\n      </div>', '</button>\n        <button\n          onClick={() => setMusicTab("chatlog")}\n          className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${musicTab === "chatlog" ? "bg-white shadow-sm text-[#7A2A3A]" : "text-gray-400"}`}\n        >\n          记录\n        </button>\n      </div>');
    c = c.replace(match[1], newTab);
    changed = true;
    console.log('STEP A done');
} else {
    console.log('STEP A: pattern not found');
}

// STEP B: Find chatlog insertion point
// After the playlist block ends with )} and before the outer div
// Look for the pattern: )}  followed by newline+spaces+{showQuickReply
const oldPlaylistEndRe = /(\s*\)}\s*\n\s*\{showQuickReply)/;
const pm = c.match(oldPlaylistEndRe);
if (pm) {
    console.log('Found playlist end, inserting chatlog...');
    const chatlogBlock = `
        {musicTab === "chatlog" && (
          <div className="h-full flex flex-col px-4 py-3">
            <div className="text-center text-[10px] text-gray-400 mb-2 font-bold">
              听歌时的对话
            </div>
            <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
              {musicChatHistory.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full opacity-30 text-[10px] gap-2">
                  <MessageCircle size={24} />
                  还没有对话记录
                </div>
              ) : (
                musicChatHistory.map((msg, idx) => (
                  <div
                    key={msg.id || idx}
                    className={\`flex \${msg.sender === "me" ? "justify-end" : "justify-start"}\`}
                  >
                    <div
                      className={\`max-w-[80%] px-3 py-1.5 rounded-2xl text-[11px] leading-snug \${
                        msg.sender === "me"
                          ? "bg-[#7A2A3A] text-white rounded-br-sm"
                          : "bg-white text-gray-800 border border-black/5 rounded-bl-sm"
                      }\`}
                    >
                      <span className="font-bold text-[9px] opacity-60 block mb-0.5">
                        {msg.sender === "me" ? (userName || "我") : (persona?.name || "TA")}
                      </span>
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>
            {musicChatHistory.length > 0 && (
              <button
                onClick={() => {
                  setMusicChatHistory([]);
                  setMusicMemory("");
                }}
                className="mt-2 text-[9px] text-gray-400 hover:text-red-400 text-center transition-colors"
              >
                清空记录
              </button>
            )}
          </div>
        )}
`;
    c = c.replace(pm[1], ')}\n' + chatlogBlock + '      {showQuickReply');
    console.log('STEP B done');
} else {
    console.log('STEP B: pattern not found');
    // Show what's near the playlist end
    const idx = c.indexOf('{showQuickReply');
    if (idx >= 0) {
        console.log('Context around {showQuickReply:');
        console.log(c.slice(Math.max(0,idx-200), idx+50));
    }
}

fs.writeFileSync('C:/Users/bichenxi/echoes_phone/src/components/Music.jsx', c, 'utf8');
console.log('Written. Size:', c.length);

// Verify
const v = fs.readFileSync('C:/Users/bichenxi/echoes_phone/src/components/Music.jsx', 'utf8');
console.log('chatlog found:', v.includes('musicTab === "chatlog"'));
console.log('chatlog count:', (v.match(/musicTab === "chatlog"/g)||[]).length);
