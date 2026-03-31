# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open(r'C:\Users\bichenxi\echoes_phone\src\components\Music.jsx', 'r', encoding='utf-8') as f:
    c = f.read()

print(f"File size: {len(c)} chars")

# === STEP A: Add "记录" tab button ===
# Find the exact pattern: 歌单 button closing tag followed by the closing div of the tab bar
OLD_TAB = '''        <button
          onClick={() => setMusicTab("playlist")}
          className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${musicTab === "playlist" ? "bg-white shadow-sm text-[#7A2A3A]" : "text-gray-400"}`}
        >
          歌单
        </button>
      </div>'''

NEW_TAB = '''        <button
          onClick={() => setMusicTab("playlist")}
          className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${musicTab === "playlist" ? "bg-white shadow-sm text-[#7A2A3A]" : "text-gray-400"}`}
        >
          歌单
        </button>
        <button
          onClick={() => setMusicTab("chatlog")}
          className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${musicTab === "chatlog" ? "bg-white shadow-sm text-[#7A2A3A]" : "text-gray-400"}`}
        >
          记录
        </button>
      </div>'''

if OLD_TAB in c:
    c = c.replace(OLD_TAB, NEW_TAB, 1)
    print("STEP A: Added 记录 tab button - OK")
else:
    print("STEP A: FAILED - pattern not found")

# === STEP B: Add chatlog JSX block after playlist tab ===
# Pattern: playlist )} closes, then immediately </div> and {showQuickReply
# The playlist block ends with:         )}
# We want to insert BEFORE the </div> that closes the outer flex-grow div
# Actually looking at the structure: playlist content is inside the </div> of the outer container
# We insert the chatlog block right before that closing div

OLD_PLAYLIST_END = '''        )}

        {showQuickReply'''

NEW_PLAYLIST_END = '''        )}

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
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-3 py-1.5 rounded-2xl text-[11px] leading-snug ${
                        msg.sender === "me"
                          ? "bg-[#7A2A3A] text-white rounded-br-sm"
                          : "bg-white text-gray-800 border border-black/5 rounded-bl-sm"
                      }`}
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

        {showQuickReply'''

if OLD_PLAYLIST_END in c:
    c = c.replace(OLD_PLAYLIST_END, NEW_PLAYLIST_END, 1)
    print("STEP B: Added chatlog JSX block - OK")
else:
    print("STEP B: FAILED - pattern not found")
    # Try to find what's actually there
    idx = c.find('        )}')
    if idx >= 0:
        print(f"  Found '        )}}' at index {idx}")
        print(f"  Context: {repr(c[idx:idx+100])}")

with open(r'C:\Users\bichenxi\echoes_phone\src\components\Music.jsx', 'w', encoding='utf-8') as f:
    f.write(c)

print(f"\nFinal file size: {len(c)} chars")
# Verify
with open(r'C:\Users\bichenxi\echoes_phone\src\components\Music.jsx', 'r', encoding='utf-8') as f:
    verify = f.read()
print(f"chatlog found: {'musicTab === \"chatlog\"' in verify}")
print(f"musicChatHistory found: {'musicChatHistory.length === 0' in verify}")
