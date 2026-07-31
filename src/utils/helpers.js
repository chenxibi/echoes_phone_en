import worldBook from "../components/WorldBook";

// Parse bulk link text
export const parseStickerLinks = (text) => {
  if (!text) return [];
  return text
    .split("\n")
    .map((line) => {
      // Support both Chinese and English colons
      const parts = line.split(/[:：]/);
      if (parts.length >= 2) {
        const desc = parts[0].trim();
        // The rest may contain colons (e.g. https://), so merge the remaining parts
        const url = parts.slice(1).join(":").trim();
        if (desc && url.startsWith("http")) {
          return {
            id: `link_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            url: url,
            desc: desc,
            enabled: true,
          };
        }
      }
      return null;
    })
    .filter((item) => item !== null);
};

export const safeJSONParse = (text) => {
  if (!text) return null;

  try {
    let clean = text;

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) clean = jsonMatch[0];

    const TEMP_Q = "%%_Q_%%";

    clean = clean.replace(/([\{\,\[]\s*)"/g, "$1" + TEMP_Q);
    clean = clean.replace(/"(\s*\:)/g, TEMP_Q + "$1");
    clean = clean.replace(/(\:\s*)"/g, "$1" + TEMP_Q);
    clean = clean.replace(/"\s*(?=[,\}\]])/g, TEMP_Q);

    clean = clean.replace(/([，。！？…、\.,!\?])\s*"/g, "$1”");
    clean = clean.replace(/"(?=\s*[，。！？…、\.,!\?])/g, "”");

    clean = clean.replace(/([\u4e00-\u9fa5])"([\u4e00-\u9fa5])/g, "$1“$2");

    clean = clean.replace(/"(?=[\u4e00-\u9fa5])/g, "“");

    clean = clean.replace(/([\u4e00-\u9fa5])"(?!\s*[:,\}\]])/g, "$1”");

    clean = clean.replace(/"/g, '\\"');

    clean = clean.split(TEMP_Q).join('"');

    clean = clean.replace(/\\\\"/g, '\\"');

    const repairedText = jsonrepair(clean);
    return JSON.parse(repairedText);
  } catch (e) {
    console.error("[Echoes] JSON parse failed:", e);
    console.log("[Echoes] Problematic text:", text);
    try {
      const simpleRepair = jsonrepair(text);
      return JSON.parse(simpleRepair);
    } catch (err2) {
      throw new Error(`Format parse failed: ${e.message.slice(0, 30)}...`);
    }
  }
};

export const compressImage = (file, maxWidth = 500, quality = 0.7) => {
  return new Promise((resolve, reject) => {
  // If it's a GIF, return the original DataURL directly without Canvas compression to preserve animation
    if (file.type === "image/gif") {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/webp", quality));
      };
    };
  });
};

export const formatTime = (date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
export const formatDate = (date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    weekday: "short",
  });

export const formatSmartTime = (timestamp) => {
  if (!timestamp) return "";
  const d = new Date(timestamp);
  const now = new Date();
  const hm = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const msgDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diffDays = Math.floor((today - msgDay) / 86400000);
  if (diffDays === 0) return hm;
  if (diffDays === 1) return `Yesterday ${hm}`;
  const md = `${d.getMonth() + 1}/${d.getDate()}`;
  if (d.getFullYear() === now.getFullYear()) return `${md} ${hm}`;
  return `${d.getFullYear()}/${md} ${hm}`;
};

export const replacePlaceholders = (text, charName, userName) => {
  if (!text) return "";
  return text
    .replace(/\{\{char\}\}/gi, charName) // gi means global + case-insensitive
    .replace(/\{\{user\}\}/gi, userName);
};

// --- Helper function: Generate topic guidance based on time ---
export const getTimeBasedGuidance = (dateObj) => {
  const hour = dateObj.getHours();
  const month = dateObj.getMonth() + 1; // 0-11 to 1-12

  let timeVibe = "";
  let seasonalVibe = "";

  // 1. Time period determination
  if (hour >= 23 || hour < 5) {
    // Late night: Emo, adult topics, urban legends, insomnia
    timeVibe =
      "Late Night (深夜): Emo/Emotional venting, Adult topics/NSFW hints, Urban legends, Insomnia thoughts.";
  } else if (hour >= 6 && hour < 10) {
    // Morning: Morning rush, clocking in, breakfast, waking up grumpy
    timeVibe =
      "Morning (早晨): Morning rush/Commute, Breakfast choices, Waking up, sleepy.";
  } else if (hour >= 11 && hour <= 13) {
    // Lunch time: Takeout, deciding what to eat, restaurant visits, food recommendations
    timeVibe =
      "Lunch Time (午饭): Food delivery, 'What to eat?', Hunger, Office break.";
  } else if (hour >= 17 && hour <= 20) {
    // Dinner time: Cooking, group meals, team building, getting off work
    timeVibe =
      "Dinner Time (晚饭): Cooking/Recipes, Dining out, Relaxing after work, Night life starting.";
  } else {
    // Other times: Slacking off, daily routine
    timeVibe =
      "Daily Life (日常): Slacking off at work/school, Afternoon tea, Random gossip.";
  }

  // 2. Month/Season determination (for atmosphere reference only)
  if (month === 12) {
    seasonalVibe =
      " Season: Winter/December. (Keywords: Cold, Christmas vibes, End of year).";
  } else if (month === 1 || month === 2) {
    seasonalVibe =
      " Season: Winter/New Year. (Keywords: Holidays, Family, Cold).";
  } else if (month >= 6 && month <= 8) {
    seasonalVibe =
      " Season: Summer. (Keywords: Heat waves, Air conditioning, Ice cream, Rainstorms).";
  }

  return `
  Current Context: Real-world time is ${hour}:00 (${timeVibe}). ${
    seasonalVibe ? "Season: " + seasonalVibe : ""
  }
  [Generation Strategy]: 
  - You MAY generate **at most 1 thread** related to the current time/season (e.g., food, weather, mood).
  - The REST of the threads MUST be completely **random and diverse** (e.g., gaming, gossip, hobbies, weird questions) to make the forum feel alive and unpredictable.
  - DO NOT make every post about the time/season.
  `;
};

let notificationSetter = null;

// New initialization function
export const initNotification = (setter) => {
  notificationSetter = setter;
};

export const showToast = (type, message) => {
  if (notificationSetter) {
    notificationSetter({ type, message: String(message) });
  } else {
    console.warn("Notification setter not initialized!");
  }
};
export const getCurrentTimeObj = (settings) => {
  // Add defensive code to handle empty settings
  if (!settings) return new Date();

  return settings.useSystem
    ? new Date()
    : new Date(`${settings.customDate}T${settings.customTime}`);
};

// --- New helper function: Get recent messages by turns ---
export const getRecentTurns = (history, limit) => {
  if (history.length === 0) return [];

  let turnsFound = 0;
  let startIndex = 0;
  let currentSender = null;

  // Traverse backwards, counting turns
  for (let i = history.length - 1; i >= 0; i--) {
    const msg = history[i];
    // If sender changed (or it's the last message), increment turn count
    if (msg.sender !== currentSender) {
      turnsFound++;
      currentSender = msg.sender;
    }

    // If turn count exceeds limit, stop, current i + 1 is the slice point
    if (turnsFound > limit) {
      startIndex = i + 1;
      break;
    }
    // If we've reached the beginning, startIndex stays 0
  }

  return history.slice(startIndex);
};
export const getFormattedMessageText = (m, userName, persona, chatStyle) => {
  const senderName =
    m.sender === "me" ? userName || "User" : persona?.name || "Char";
  let content = m.text || "";

  if (m.isVoice) {
    content = `(Sent a voice message): ${m.text.replace("[语音消息] ", "")}`;
  }
  if (m.sticker) {
    if (!content || !content.trim()) {
      content = `[Sent a sticker: ${m.sticker.desc}]`;
    }
  }
  if (m.isForward && m.forwardData) {
    const fwd = m.forwardData;
    content += ` [Forwarded ${
      fwd.type === "post" ? "a post" : "a comment"
    }: "${fwd.content.slice(0, 50)}..."]`;
  }

  let finalLine = `${senderName}: ${content}`;

  // Use the passed-in chatStyle
  const msgStyle = m.style || chatStyle;

  if (
    m.sender !== "me" &&
    m.status &&
    m.status.thought &&
    msgStyle !== "novel"
  ) {
    finalLine += `\n(Inner Thought / True Intention: ${m.status.thought})`;
  }

  return finalLine;
};

export const getContextString = (
  chatHistory,
  userName,
  persona,
  chatStyle,
  limit = 10,
) => {
  if (!chatHistory || !Array.isArray(chatHistory)) return "None.";

  const recent = getRecentTurns(chatHistory, limit);
  if (recent.length === 0) return "None.";

  // In map, pass parameters
  return recent
    .map((msg) => getFormattedMessageText(msg, userName, persona, chatStyle))
    .join("\n");
};
export const getWorldInfoString = (worldBook) => {
  if (!worldBook || !Array.isArray(worldBook)) return "";

  return worldBook
    .filter((e) => e.enabled)
    .map((e) => `[${e.name}]: ${e.content}`)
    .join("\n\n");
};
export const getStickerInstruction = (list = charStickers, stickersEnabled) => {
  if (!stickersEnabled) return "";

  const activeList = list.filter((s) => s.enabled !== false);

  if (activeList.length === 0) return "";
  const listStr = list.map((s) => `ID: ${s.id}, Desc: ${s.desc}`).join("\n");
  return `\n[STICKER SYSTEM]\nAvailable Stickers:\n${listStr}[Usage Frequency Rules]
    1. **Frequency constraint**: Use a sticker ONLY when the emotion is strong or the context specifically demands it. 
    2. **Probability**: Aim for a 30% - 40% usage rate. Most responses (approx. 6/10) should have "stickerId": null.
    3. To send a sticker, use "stickerId" field in JSON. Otherwise, set it to null.`;
};

/* --- UTILS --- cleanCharacterJson function replacement: */

export const cleanCharacterJson = (jsonContent) => {
  try {
    const rawObj =
      typeof jsonContent === "string" ? JSON.parse(jsonContent) : jsonContent;

    // 1. Get outer and inner data separately
    const outerData = rawObj;
    const innerData = rawObj.data || {};

    // 2. Smart extract Description
    // Logic: if innerDesc contains "same as above" or is clearly shorter than outerDesc, use outerDesc
    const outerDesc = outerData.description || outerData.persona || "";
    const innerDesc = innerData.description || innerData.persona || "";

    let finalDesc = innerDesc;
    if (
      !innerDesc ||
      innerDesc.includes("同上") ||
      innerDesc.includes("same as") ||
      (outerDesc.length > innerDesc.length && outerDesc.length > 50)
    ) {
      finalDesc = outerDesc;
    }

    // 3. Smart extract Name
    const name = innerData.name || outerData.name || "Unknown";

    // 4. Clean Description (handle XML tags)
    // Often Prompt generates content wrapped in <character>, extract it here
    let richDescription = finalDesc;
    const charTagMatch = finalDesc.match(/<character>([\s\S]*?)<\/character>/i);
    if (charTagMatch) richDescription = charTagMatch[1].trim();

    // If there's a personality field, append it
    if (outerData.personality && typeof outerData.personality === "string") {
      richDescription += `\n\n[Personality Traits]: ${outerData.personality}`;
    }

    // 5. Combine final text key
    // 5. Combine final text key (first line is plain name, no Name: prefix)
    let cleanText = `${name}\n\nDescription:\n${richDescription}`;

    // 6. Process WorldBook
    // Also prioritize the side with content
    let rawEntries = [];
    if (
      innerData.character_book &&
      innerData.character_book.entries &&
      innerData.character_book.entries.length > 0
    ) {
      rawEntries = innerData.character_book.entries;
    } else if (outerData.character_book && outerData.character_book.entries) {
      rawEntries = outerData.character_book.entries;
    }

    const worldBookEntries = rawEntries
      .map((entry) => ({
        id: `char_wb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: entry.comment || entry.keys?.[0] || entry.name || `Entry`,
        content: entry.content,
        enabled: entry.enabled !== false,
        group: entry.group || name || "Default Group",
      }))
      .filter((e) => e.content);

    return {
      rawText: cleanText.trim(),
      worldBook: worldBookEntries,
      name: name,
    };
  } catch (e) {
    console.error("Character Parse Error", e);
    return {
      rawText:
        typeof jsonContent === "string"
          ? jsonContent
          : JSON.stringify(jsonContent),
      worldBook: [],
      name: "Unknown",
    };
  }
};

export const isImageMsg = (content) =>
  content && content.startsWith(IMG_TAG_START);

export const getImageDesc = (content) => content.replace(IMG_TAG_START, "");
