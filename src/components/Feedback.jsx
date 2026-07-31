import React, { useState, useRef } from "react";
import { MessageSquare, Send, Paperclip, X, Image } from "lucide-react";

const MAX_FILES = 6;
const MAX_SIZE_MB = 10;
const TG_TOKEN = "8603400358:AAGDpK65rf4JRtEwBc5M2SkqyMznqxbQJxY";
const TG_CHAT_ID = "6224897691";

const Feedback = ({ onClose }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [tooLargeFiles, setTooLargeFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files);
    const newTooLarge = [];
    const valid = [];

    for (const f of selected) {
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        newTooLarge.push(f.name);
      } else {
        valid.push(f);
      }
    }

    setFiles((prev) => {
      const combined = [...prev, ...valid];
      return combined.slice(0, MAX_FILES);
    });
    setTooLargeFiles(newTooLarge);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async () => {
    if (!name.trim()) return alert("Please enter your name");
    if (!message.trim()) return alert("Please enter feedback content");

    setSending(true);

    // Build text message
    let textMsg = `📩 <b>Echoes Feedback</b>\n\n`;
    textMsg += `<b>Name: </b>${name.trim()}\n`;
    if (contact.trim()) {
      textMsg += `<b>Contact: </b>${contact.trim()}\n`;
    }
    textMsg += `<b>Feedback:</b>\n${message.trim()}`;

    try {
      // 1. Send text message first
      const textRes = await fetch(
        `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TG_CHAT_ID,
            text: textMsg,
            parse_mode: "HTML",
          }),
        }
      );

      if (!textRes.ok) {
        const err = await textRes.json();
        throw new Error(err.description || "Text send failed");
      }

      // 2. Then send images one by one
      for (const f of files) {
        const imgForm = new FormData();
        imgForm.append("chat_id", TG_CHAT_ID);
        imgForm.append("photo", f, f.name);
        // Image caption indicating which feedback it belongs to
        imgForm.append("caption", `Screenshot from ${name.trim()} (${f.name})`);

        const imgRes = await fetch(
          `https://api.telegram.org/bot${TG_TOKEN}/sendPhoto`,
          { method: "POST", body: imgForm }
        );

        if (!imgRes.ok) {
          console.warn("Image send failed:", f.name);
        }
      }

      setSent(true);
    } catch (err) {
      alert("Send failed: " + (err.message || "Please try again later"));
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-in fade-in">
        <div className="p-4 bg-green-50 rounded-full">
          <Send size={32} className="text-green-500" />
        </div>
        <p className="text-sm font-bold text-gray-700">Feedback Sent</p>
        <p className="text-xs text-gray-400">Thank you for your feedback!</p>
        <button
          onClick={() => {
            setSent(false);
            setName("");
            setContact("");
            setMessage("");
            setFiles([]);
            onClose();
          }}
          className="px-6 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full space-y-4 p-1 animate-in fade-in">
      {/* Name */}
      <div>
        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="What should we call you?"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      {/* Contact */}
      <div>
        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">
          Contact <span className="text-gray-300">(optional)</span>
        </label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Email / WeChat / Phone..."
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      {/* Upload Images */}
      <div>
        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">
          Screenshots/Attachments <span className="text-gray-300">(optional · max {MAX_FILES} · ≤{MAX_SIZE_MB}MB each)</span>
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {files.map((f, i) => (
            <div
              key={i}
              className="relative w-14 h-14 rounded-lg overflow-hidden border border-gray-200 group"
            >
              <img
                src={URL.createObjectURL(f)}
                alt={f.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removeFile(i)}
                className="absolute top-0 right-0 p-0.5 bg-black/50 rounded-bl text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={10} />
              </button>
            </div>
          ))}
          {files.length < MAX_FILES && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-14 h-14 rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors"
            >
              <Image size={16} />
            </button>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
        {tooLargeFiles.length > 0 && (
            <p className="text-[10px] text-red-400">
            The following files are too large (over {MAX_SIZE_MB}MB): {tooLargeFiles.join(", ")}
          </p>
        )}
      </div>

      {/* Feedback Content */}
      <div className="flex-1 flex flex-col">
        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">
          Feedback <span className="text-red-400">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your issue, suggestion, or idea..."
          className="flex-1 w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-gray-400 transition-colors resize-none min-h-[120px]"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={sending}
        className="w-full py-2.5 bg-[#2C2C2C] text-white text-xs font-bold rounded-full flex items-center justify-center gap-2 hover:bg-black transition-colors disabled:opacity-50"
      >
        {sending ? (
          <>Sending...</>
        ) : (
          <>
            <Send size={14} />
            Submit Feedback
          </>
        )}
      </button>

      <p className="text-[9px] text-gray-400 text-center">
        Your feedback will be sent directly to the developer
      </p>
    </div>
  );
};

export default Feedback;
