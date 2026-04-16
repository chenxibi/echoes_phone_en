# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\bichenxi\echoes_phone_en\src\utils\appHelpers.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# All UI text replacements in appHelpers.jsx
replacements = [
    # IMG tag
    ('export const IMG_TAG_START = "[图片]";', 'export const IMG_TAG_START = "[Image]";'),
    # App list labels
    ('label: "生活圈"', 'label: "Forum"'),
    ('label: "智能家"', 'label: "Smart Home"'),
    ('label: "浏览器"', 'label: "Browser"'),
    ('label: "日记"', 'label: "Diary"'),
    ('label: "生活痕迹"', 'label: "Life Traces"'),
    ('label: "共鸣旋律"', 'label: "Resonance"'),
    ('label: "世界书"', 'label: "World Book"'),
    ('label: "个性化"', 'label: "Personalization"'),
    ('label: "系统设置"', 'label: "Settings"'),
    # Console errors
    ('console.error("[Echoes] JSON 解析失败:", e)', 'console.error("[Echoes] JSON parse failed:", e)'),
    ('console.log("[Echoes] 问题文本:", text)', 'console.log("[Echoes] Problematic text:", text)'),
    ('throw new Error(`格式解析失败: ${e.message.slice(0, 30)}...`)', 'throw new Error(`Format parse failed: ${e.message.slice(0, 30)}...`)'),
    # API errors
    ('throw new Error("未配置 API 信息。请在设置中输入 Base URL 和 Key。")', 'throw new Error("API not configured. Please enter Base URL and Key in settings.")'),
    ('onError("请求超时 (360s)")', 'onError("Request timeout (360s)")'),
    ('onError("API 返回内容为空 (或仅含空白符)")', 'onError("API returned empty content (or whitespace only)")'),
    ('onError(`解析失败: ${e.message}\\n内容: ${content.substring(0, 20)}...`)', 'onError(`Parse failed: ${e.message}\\nContent: ${content.substring(0, 20)}...`)'),
    # cleanCharacterJson
    ('innerDesc.includes("同上")', 'innerDesc.includes("Same as above")'),
    # Default group
    ('group: entry.group || name || "默认分组"', 'group: entry.group || name || "Default Group"'),
    # CollapsibleThought
    ('label = "查看心声"', 'label = "View Thoughts"'),
    ('{isOpen ? "收起" : label}', '{isOpen ? "Hide" : label}'),
    # Edit/Delete buttons
    ('title="编辑"', 'title="Edit"'),
    ('title="删除"', 'title="Delete"'),
    ('title="AI 代写/扩写"', 'title="AI Write/Expand"'),
    # Sticker editor
    ('<h3 className="text-sm font-bold text-gray-700">编辑表情包</h3>', '<h3 className="text-sm font-bold text-gray-700">Edit Sticker</h3>'),
    ('描述 (角色将根据此描述选用)', 'Description (character picks stickers by this)'),
    ('>删除<', '>Delete<'),
    ('>取消<', '>Cancel<'),
    ('>保存<', '>Save<'),
    # Creation assistant
    ('<WandSparkles size={20} /> 创作助手', '<WandSparkles size={20} /> Creation Assistant'),
    ('输入简短描述，AI将为你生成完整角色卡', 'Enter a brief description, AI will generate a complete character card for you'),
    ('角色描述', 'Character Description'),
    ('"描述角色特点，如"阳光开朗的青梅竹马"\\n也可以直接输入喜欢的IP角色名字，如"Jason Todd - 红头罩""',
     '"Describe character traits, e.g. \\"cheerful childhood friend\\"\\nOr directly enter a favorite IP character name, e.g. \\"Jason Todd - Red Hood\\""'),
    ('生成中，请稍候...', 'Generating, please wait...'),
    ('生成角色卡', 'Generate Character Card'),
    # Preview area
    ('角色名称', 'Character Name'),
    ('>核心设定 (Raw Prompt)<', '>Core Settings (Raw Prompt)<'),
    ('将存入系统设定', 'Will be saved to system settings'),
    ('placeholder="此处显示角色的人设详情..."', 'placeholder="Character persona details shown here..."'),
    ('>开场白 (First Message)<', '>First Message<'),
    ('仅用于展示/复制', 'For display/copy only'),
    ('placeholder="此处显示角色的第一句开场白..."', 'placeholder="Character first message shown here..."'),
    ('重新生成', 'Regenerate'),
    ('导出JSON', 'Export JSON'),
    ('应用角色', 'Apply Character'),
    # Status record
    ('暂无状态记录', 'No status records'),
    # Category labels
    ('>服装<', '>Outfit<'),
    ('>行为<', '>Behavior<'),
    ('>心声<', '>Thoughts<'),
    ('>坏心思<', '>Secret<'),
    # Voice message
    ('const cleanText = msg.text.replace("[语音消息] ", "")', 'const cleanText = msg.text.replace("[Voice] ", "")'),
    # Voice player
    ('/* 时长 */', '/* Duration */'),
    ('/* 语音转文字内容 */', '/* Voice-to-text content */'),
    # Transfer
    ('{isMe ? "向对方转账" : "向你转账"}', '{isMe ? "Transfer to them" : "Transfer to you"}'),
    ('{isPending ? "等待确认" : isAccepted ? "已收款" : "已退还"}', '{isPending ? "Waiting" : isAccepted ? "Received" : "Refunded"}'),
    ('>退还<', '>Refund<'),
    ('>收款<', '>Receive<'),
    # Custom dialog
    ('placeholder="请输入..."', 'placeholder="Please enter..."'),
    ('>取消<', '>Cancel<'),
    ('{config.confirmText || "确定"}', '{config.confirmText || "OK"}'),
    # SmartWatch map
    ('/* 上半部分：地图背景图 */', '/* Top: Map background */'),
    ('/* 下半部分：文字信息 */', '/* Bottom: Text info */'),
    # Sticker description in creation assistant
    ('"描述角色特点，如"阳光开朗的青梅竹马""', '"Describe character traits, e.g. cheerful childhood friend"'),
]

count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        count += 1
    else:
        pass  # skip misses silently

print(f'Replaced {count}/{len(replacements)}')

with open(r'C:\Users\bichenxi\echoes_phone_en\src\utils\appHelpers.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
