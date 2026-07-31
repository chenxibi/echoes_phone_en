import React from "react";
import { Upload, RotateCcw, Asterisk, Type, Monitor, Grid, Palette } from "lucide-react";

// ============================================================
// Official skin presets
// Each skin is a self-contained CSS snippet injected via <style> into #echoes-chat
// ============================================================
const OFFICIAL_SKINS = [
  {
    id: "freebreeze",
    name: "Free Breeze",
    desc: "Low-saturation salt style, refreshing sea breeze",
    preview: "bg-[#f2f7f9]",
    previewColor: "#f2f7f9",
    borderColor: "#5da9ad",
    css: `/* Free Breeze */
#echoes-chat { --skin-bg: #f2f7f9; --skin-surface: #ffffff; --skin-card: #fcfdfe; --skin-text: #2c3e50; --skin-sub: #7f8c8d; --skin-accent: #5da9ad; --skin-accent-hover: #4a8d91; }

/* Global base style: sans-serif modern font, increased letter spacing for breathing feel */
#echoes-chat { background-color: #f2f7f9 !important; background-image: linear-gradient(180deg, #f2f7f9 0%, #e6eeee 100%) !important; color: #2c3e50 !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important; }

/* Container & Background */
#echoes-chat .bg-\[\#F2F2F7\] { background-color: #f2f7f9 !important; }
#echoes-chat .bg-\[\#EBEBF0\] { background: #e0eadd !important; background-color: #e2e8f0 !important; }
#echoes-chat [class*="bg-\[\#F2F2F7"] { background-color: #f2f7f9 !important; }
#echoes-chat [class*="bg-\[\#EBEBF0"] { background: #e2e8f0 !important; }

/* Different levels of light background */
#echoes-chat .bg-blue-50\/50 { background: #f0f7f8 !important; }
#echoes-chat .bg-gray-100\/60 { background: #edf2f7 !important; }
#echoes-chat .bg-gray-300\/50 { background: #e2e8f0 !important; }
#echoes-chat .bg-white\\/50 { background: rgba(255, 255, 255, 0.6) !important; }

/* Text colors: ensure high readability */
#echoes-chat .text-\[\#1a1a1a\] { color: #2c3e50 !important; }
#echoes-chat .text-\[\#2C2C2C\] { color: #34495e !important; }
#echoes-chat .text-gray-800 { color: #2c3e50 !important; }
#echoes-chat .text-gray-700 { color: #34495e !important; }
#echoes-chat .text-gray-600 { color: #546e7a !important; }
#echoes-chat .text-gray-500 { color: #7f8c8d !important; }
#echoes-chat .text-gray-400 { color: #95a5a6 !important; }
#echoes-chat .text-gray-300 { color: #bdc3c7 !important; }

/* Header style */
#echoes-chat header { color: #4a8d91 !important; font-weight: 600 !important; letter-spacing: 0.05em !important; }

/* Panels & cards: subtle shadow, mimicking transparent seawater texture */
#echoes-chat .glass-panel { background: rgba(255, 255, 255, 0.8) !important; backdrop-filter: blur(8px) !important; -webkit-backdrop-filter: blur(8px) !important; border: 1px solid rgba(93, 169, 173, 0.2) !important; color: #2c3e50 !important; border-radius: 12px !important; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03) !important; }
#echoes-chat .glass-card { background: #ffffff !important; border: 1px solid #e2e8f0 !important; border-radius: 12px !important; color: #2c3e50 !important; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02) !important; }
#echoes-chat .glass-card label { color: #34495e !important; }
#echoes-chat .glass-card p, #echoes-chat .glass-card span { color: #7f8c8d !important; }

/* Lists & background blocks */
#echoes-chat [class*="bg-white"] { background: #ffffff !important; border-radius: 10px !important; }
#echoes-chat [class*="bg-gray-50"] { background: #f8fafc !important; }
#echoes-chat [class*="bg-gray-100"] { background: #f1f5f9 !important; }

/* Key buttons: reef stone gray / deep sea blue */
#echoes-chat [class*="bg-black"] { background: #5da9ad !important; border-color: #5da9ad !important; color: #ffffff !important; transition: all 0.3s ease !important; }
#echoes-chat [class*="bg-black"]:hover { background: #4a8d91 !important; box-shadow: 0 4px 10px rgba(93, 169, 173, 0.3) !important; }
#echoes-chat button.bg-black { background: #5da9ad !important; }
#echoes-chat button.bg-black:hover { background: #4a8d91 !important; }
#echoes-chat [class*="bg-\[\#2C2C2C\]"] { background: #5da9ad !important; }
#echoes-chat [class*="bg-\[\#2C2C2C\]"]:hover { background: #4a8d91 !important; }
#echoes-chat [class*="bg-gray-800"] { background: #34495e !important; }
#echoes-chat :not(button):not(button *)[class*="text-white"] { color: #ffffff !important; }

/* Input field style */
#echoes-chat input, #echoes-chat textarea, #echoes-chat [contenteditable] { background: #ffffff !important; color: #2c3e50 !important; border: 1px solid #cfd8dc !important; border-radius: 8px !important; transition: border-color 0.3s !important; }
#echoes-chat input:focus, #echoes-chat textarea:focus { border-color: #5da9ad !important; ring: none !important; outline: none !important; }
#echoes-chat input::placeholder, #echoes-chat textarea::placeholder { color: #bdc3c7 !important; }

/* Border colors */
#echoes-chat .border-gray-200 { border-color: #e2e8f0 !important; }
#echoes-chat .border-gray-200\/50 { border-color: #edf2f7 !important; }
#echoes-chat .border-white\/50 { border-color: rgba(255, 255, 255, 0.5) !important; }
#echoes-chat .border-white\/60 { border-color: rgba(255, 255, 255, 0.6) !important; }
#echoes-chat .ring-black\/5 { --tw-ring-color: rgba(93, 169, 173, 0.1) !important; }
#echoes-chat .border-white { border-color: #ffffff !important; }

/* Hover interactions */
#echoes-chat .text-gray-700.group-hover\:text-black { color: #7f8c8d !important; }
#echoes-chat .text-gray-700.group-hover\:text-black:hover { color: #5da9ad !important; }

/* Icon colors */
#echoes-chat .glass-panel svg { stroke: #5da9ad; }
#echoes-chat [class*="bg-white"] svg { stroke: #5da9ad; }
#echoes-chat [class*="rounded-\[24px\]"].glass-panel svg, #echoes-chat .flex.justify-around svg { stroke: #5da9ad; }
/* Protect dark send button icons as white */
#echoes-chat [class*="bg-\[\#2C2C2C\]"] svg { stroke: #ffffff !important; }

/* Status colors */
#echoes-chat .bg-green-500 { background: #81b29a !important; } /* Forest green accent */
#echoes-chat .text-red-500 { color: #e07a5f !important; } /* Sunset orange reminder */
#echoes-chat .bg-green-50\/50 { background: #f2f9f6 !important; }
#echoes-chat .bg-green-100 { background: #e8f3ee !important; }
#echoes-chat .text-green-700 { color: #6d9785 !important; }
#echoes-chat .text-green-600 { color: #81b29a !important; }
#echoes-chat .border-green-100 { border-color: #d1e5dc !important; }

/* Unified border radius: salt style prefers square-round combination, not overly round, keeping it clean */
#echoes-chat [class*="rounded-lg"], #echoes-chat [class*="rounded-xl"], #echoes-chat [class*="rounded-2xl"], #echoes-chat [class*="rounded-\[16px\]"], #echoes-chat [class*="rounded-\[22px\]"], #echoes-chat [class*="rounded-\[24px\]"], #echoes-chat [class*="rounded-full"], #echoes-chat [class*="rounded-\[48px\]"] { border-radius: 10px !important; }
#echoes-chat [class*="rounded-full"] { border-radius: 9999px !important; }

/* Hide scrollbar but keep functionality for cleanliness */
#echoes-chat ::-webkit-scrollbar { width: 4px; }
#echoes-chat ::-webkit-scrollbar-track { background: transparent; }
#echoes-chat ::-webkit-scrollbar-thumb { background: #cfd8dc; border-radius: 10px; }
#echoes-chat ::-webkit-scrollbar-thumb:hover { background: #bdc3c7; }

/* Modal stays semi-transparent */
#echoes-chat .fixed.inset-0 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .bg-white\\/90 { background: rgba(255,255,255,0.85) !important; backdrop-filter: blur(20px) !important; -webkit-backdrop-filter: blur(20px) !important; }
#echoes-chat [class*="bg-white"].rounded-2xl { background: rgba(255,255,255,0.92) !important; }
#echoes-chat .bg-black\/50 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .bg-black\/40 { background: rgba(0,0,0,0.4) !important; }
/* Message menu: light theme match */
#echoes-chat [class*="bg-[#1a1a1a]"] { background: rgba(255,255,255,0.95) !important; color: #2c3e50 !important; }
#echoes-chat [class*="bg-[#1a1a1a]"] * { color: #2c3e50 !important; }
#echoes-chat .bg-\[\#1a1a1a\]\/95 { background: rgba(255,255,255,0.95) !important; color: #2c3e50 !important; }
#echoes-chat .bg-\[\#1a1a1a\]\/95 * { color: #2c3e50 !important; }
#echoes-chat .text-red-300 { color: #8a6d59 !important; }
#echoes-chat .hover\:bg-white\/20:active, #echoes-chat .hover\:bg-white\/20:hover { background: rgba(44,62,80,0.08) !important; }
#echoes-chat .hover\:bg-red-500\/50:active, #echoes-chat .hover\:bg-red-500\/50:hover { background: rgba(138,109,89,0.15) !important; }
#echoes-chat .border-white\/20 { border-color: rgba(0,0,0,0.1) !important; }
#echoes-chat .text-red-300 { color: #e07a5f !important; }

/* Toggle theme color */
#echoes-chat .bg-green-500 { background: #81b29a !important; }
#echoes-chat .bg-gray-300 { background: #d1e5dc !important; }
/* Button selected state white text */
#echoes-chat button.bg-black { color: #fff !important; }
#echoes-chat button.bg-black:hover { color: #fff !important; }
#echoes-chat button.bg-black * { color: #fff !important; }
#echoes-chat button.bg-black:hover * { color: #fff !important; }
#echoes-chat [class*="bg-black"][class*="text-white"] { color: #fff !important; }
`,
  },
  {
    id: "latte",
    name: "Oat Latte",
    desc: "Warm palette, gentle creamy feel",
    preview: "bg-[#faf0e6]",
    previewColor: "#faf0e6",
    borderColor: "#c4956a",
    css: `/* == Oat Latte == */
#echoes-chat {
  --skin-bg: #faf0e6;
  --skin-surface: #f5e6d3;
  --skin-card: #fff8f0;
  --skin-text: #4a3728;
  --skin-sub: #8b7355;
  --skin-accent: #c4956a;
  --skin-accent-hover: #b07d50;
}
#echoes-chat .bg-\\[\\#F2F2F7\\] { background: #faf0e6 !important; }
#echoes-chat [class*="bg-\\[\\#F2F2F7"] { background: #faf0e6 !important; }
#echoes-chat .bg-\\[\\#EBEBF0\\] { background: #f0e4d8 !important; }
/* Lock screen decoration */
#echoes-chat .bg-blue-50\\/50 { background: rgba(196,180,160,0.3) !important; }
#echoes-chat .bg-gray-100\\/60 { background: rgba(196,150,106,0.2) !important; }
#echoes-chat .bg-gray-300\\/50 { background: rgba(196,150,106,0.2) !important; }
#echoes-chat .bg-white\\/50 { background: rgba(255,248,240,0.7) !important; }
#echoes-chat [class*="bg-\\[\\#EBEBF0"] { background: #f0e4d8 !important; }
#echoes-chat .bg-green-50\\/50 { background: rgba(139,176,106,0.2) !important; }
#echoes-chat .bg-green-100 { background: rgba(139,176,106,0.3) !important; }
#echoes-chat .text-green-700 { color: #6b8b50 !important; }
#echoes-chat .text-green-600 { color: #7ba060 !important; }
#echoes-chat .border-green-100 { border-color: rgba(139,176,106,0.3) !important; }
#echoes-chat .text-\\[\\#1a1a1a\\] { color: #4a3728 !important; }
#echoes-chat .text-\\[\\#2C2C2C\\] { color: #5c4a3a !important; }
#echoes-chat .text-gray-800 { color: #4a3728 !important; }
#echoes-chat .text-gray-700 { color: #5c4a3a !important; }
#echoes-chat .text-gray-600 { color: #6b5540 !important; }
#echoes-chat .text-gray-500 { color: #8b7355 !important; }
#echoes-chat .text-gray-400 { color: #a0886a !important; }
#echoes-chat .text-gray-300 { color: #c4956a !important; }
#echoes-chat header { color: #b07d50 !important; }
#echoes-chat .glass-panel {
  background: rgba(255,248,240,0.7) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-color: #e8d5c0 !important;
  color: #4a3728 !important;
}
#echoes-chat .glass-card {
  background: rgba(255,248,240,0.55) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-color: #e8d5c0 !important;
  border-radius: 14px !important;
  color: #4a3728 !important;
}
#echoes-chat .glass-card label { color: #6b5540 !important; }
#echoes-chat .glass-card p, #echoes-chat .glass-card span { color: #8b7355 !important; }
#echoes-chat [class*="bg-white"] { background: #fff8f0 !important; }
#echoes-chat [class*="bg-gray-50"] { background: #fff5ec !important; }
#echoes-chat [class*="bg-gray-100"] { background: rgba(196,150,106,0.08) !important; }
#echoes-chat [class*="bg-black"] { background: #c4956a !important; border-color: #c4956a !important; }
#echoes-chat [class*="bg-black"]:hover { background: #b07d50 !important; }
#echoes-chat button.bg-black { background: #c4956a !important; }
#echoes-chat button.bg-black:hover { background: #b07d50 !important; }
#echoes-chat [class*="bg-\\[\\#2C2C2C\\]"] { background: #b07d50 !important; }
#echoes-chat [class*="bg-\\[\\#2C2C2C\\]"]:hover { background: #9a6840 !important; }
#echoes-chat [class*="bg-gray-800"] { background: #b07d50 !important; }
#echoes-chat :not(button):not(button *)[class*="text-white"] { color: #fff8f0 !important; }
#echoes-chat input, #echoes-chat textarea, #echoes-chat [contenteditable] {
  background: #fff5ec !important;
  color: #4a3728 !important;
  border-color: #e8d5c0 !important;
}
#echoes-chat input::placeholder, #echoes-chat textarea::placeholder { color: #c4956a !important; }
#echoes-chat .border-gray-200 { border-color: #e8d5c0 !important; }
#echoes-chat .border-gray-200\\/50 { border-color: #e8d5c0 !important; }
#echoes-chat .border-white\\/50 { border-color: rgba(232,213,192,0.8) !important; }
#echoes-chat .border-white\\/60 { border-color: rgba(232,213,192,0.8) !important; }
#echoes-chat .ring-black\\/5 { --tw-ring-color: rgba(180,125,80,0.06) !important; }
#echoes-chat .text-gray-700.group-hover\\:text-black { color: #8b7355 !important; }
#echoes-chat .text-gray-700.group-hover\\:text-black:hover { color: #4a3728 !important; }
#echoes-chat .glass-panel svg { stroke: #8b7355; }
#echoes-chat [class*="bg-white"] svg { stroke: #8b7355; }
#echoes-chat [class*="rounded-\\[24px\\]"].glass-panel {
  background: rgba(255,248,240,0.7) !important;
  border-color: #e8d5c0 !important;
}
#echoes-chat [class*="rounded-\\[24px\\]"].glass-panel svg,
#echoes-chat .flex.justify-around svg { stroke: #8b7355; }
#echoes-chat [class*="bg-\\[\\#1a1a1a\\]"] { background: #fff8f0 !important; color: #4a3728 !important; }
#echoes-chat [class*="bg-\\[\\#1a1a1a\\]"] * { color: #4a3728 !important; }
#echoes-chat .text-red-300 { color: #c4956a !important; }
#echoes-chat .hover\:bg-white\/20:active, #echoes-chat .hover\:bg-white\/20:hover { background: rgba(74,55,40,0.08) !important; }
#echoes-chat .hover\:bg-red-500\/50:active, #echoes-chat .hover\:bg-red-500\/50:hover { background: rgba(196,149,106,0.15) !important; }
#echoes-chat .bg-green-500 { background: #8bb06a !important; }
/* Modal background stays semi-transparent */
#echoes-chat .fixed.inset-0 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .bg-white\\/90 { background: rgba(255,248,240,0.85) !important; backdrop-filter: blur(20px) !important; -webkit-backdrop-filter: blur(20px) !important; }
#echoes-chat [class*="bg-white"].rounded-2xl { background: #fff8f0 !important; opacity: 0.95; }
#echoes-chat .bg-black\\/50 { background: rgba(0,0,0,0.5) !important; }
/* Action menu, sticker panel, modal cards keep original dark style */
#echoes-chat .bg-\[\#1a1a1a\]\/95 { background: rgba(26,26,26,0.95) !important; color: #fff !important; }
#echoes-chat .bg-\[\#1a1a1a\]\/95 * { color: #fff !important; }
#echoes-chat .bg-\[\#1a1a1a\]\\/95 { background: rgba(26,26,26,0.95) !important; color: #fff !important; }
#echoes-chat [class*="bg-[#1a1a1a]"] { background: #1a1a1a !important; color: #fff !important; }
#echoes-chat [class*="bg-[#1a1a1a]"] * { color: #fff !important; }
#echoes-chat .text-red-300 { color: #fc8181 !important; }
#echoes-chat .hover\:bg-white\/20:hover { background: rgba(255,255,255,0.2) !important; }
#echoes-chat .border-white\/20 { border-color: rgba(255,255,255,0.2) !important; }
#echoes-chat .bg-black\/50 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .fixed.inset-0 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .bg-white\\/90 { opacity:0.92 !important; backdrop-filter: blur(20px) !important; -webkit-backdrop-filter: blur(20px) !important; }
#echoes-chat [class*="bg-white"].rounded-2xl { opacity: 0.95 !important; }
#echoes-chat .text-red-500 { color: #cc6666 !important; }

/* Toggle theme color */
#echoes-chat .bg-green-500 { background: #c4a882 !important; }
#echoes-chat .bg-gray-300 { background: #e8d5c0 !important; }
/* Button selected state white text */
#echoes-chat button.bg-black { color: #fff !important; }
#echoes-chat button.bg-black:hover { color: #fff !important; }
#echoes-chat button.bg-black * { color: #fff !important; }
#echoes-chat button.bg-black:hover * { color: #fff !important; }
#echoes-chat [class*="bg-black"][class*="text-white"] { color: #fff !important; }
`
  },
  {
    id: "midnight",
    name: "Midnight Blue",
    desc: "Dark interface, soft on the eyes",
    preview: "bg-[#1a1a2e]",
    previewColor: "#1a1a2e",
    borderColor: "#99aaff",
    css: `/* == Midnight Blue == */
#echoes-chat {
  --skin-bg: #1a1a2e;
  --skin-surface: #1e1e38;
  --skin-card: #252540;
  --skin-text: #d0d0e8;
  --skin-sub: #8888aa;
  --skin-accent: #7788dd;
  --skin-accent-hover: #99aaff;
}
#echoes-chat { background: #1a1a2e !important; color: #d0d0e8 !important; }
/* Main background */
#echoes-chat .bg-\\[\\#F2F2F7\\] { background: #1a1a2e !important; }
#echoes-chat [class*="bg-\\[\\#F2F2F7"] { background: #1a1a2e !important; }
#echoes-chat .bg-\\[\\#EBEBF0\\] { background: #14142a !important; }
/* Lock screen decoration */
#echoes-chat .bg-blue-50\\/50 { background: rgba(100,100,255,0.15) !important; }
#echoes-chat .bg-gray-100\\/60 { background: rgba(80,80,160,0.2) !important; }
#echoes-chat .bg-gray-300\\/50 { background: rgba(255,255,255,0.1) !important; }
#echoes-chat .bg-white\\/50 { background: rgba(30,30,60,0.6) !important; }
#echoes-chat [class*="bg-\\[\\#EBEBF0"] { background: #14142a !important; }
#echoes-chat .bg-green-50\\/50 { background: rgba(68,170,119,0.2) !important; }
#echoes-chat .bg-green-100 { background: rgba(68,170,119,0.3) !important; }
#echoes-chat .text-green-700 { color: #66cc99 !important; }
#echoes-chat .text-green-600 { color: #55bb88 !important; }
#echoes-chat .border-green-100 { border-color: rgba(68,170,119,0.3) !important; }
/* Text hierarchy */
#echoes-chat .text-\\[\\#1a1a1a\\] { color: #e0e0f0 !important; }
#echoes-chat .text-\\[\\#2C2C2C\\] { color: #c8c8e0 !important; }
#echoes-chat .text-gray-800 { color: #d0d0e8 !important; }
#echoes-chat .text-gray-900 { color: #aabbee !important; }

#echoes-chat .text-gray-700 { color: #c0c0dd !important; }
#echoes-chat .text-gray-600 { color: #b0b0d0 !important; }
#echoes-chat .text-gray-500 { color: #8888aa !important; }
#echoes-chat .text-gray-400 { color: #7777aa !important; }
#echoes-chat .text-gray-300 { color: #6666aa !important; }
/* Title bar */
#echoes-chat header { color: #aabbee !important; }
/* Glass panel - dark semi-transparent */
#echoes-chat .glass-panel {
  background: rgba(30,30,60,0.75) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-color: rgba(255,255,255,0.08) !important;
  color: #d0d0e8 !important;
}
#echoes-chat .glass-card {
  background: rgba(30,30,60,0.6) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-color: rgba(255,255,255,0.06) !important;
  color: #d0d0e8 !important;
}
#echoes-chat .glass-card label { color: #c0c0dd !important; }
#echoes-chat .glass-card p, #echoes-chat .glass-card span { color: #a0a0cc !important; }
/* White backgrounds all replaced */
#echoes-chat [class*="bg-white"] { background: #252540 !important; }
#echoes-chat [class*="bg-gray-50"] { background: #1e1e38 !important; }
#echoes-chat [class*="bg-gray-100"] { background: rgba(255,255,255,0.05) !important; }
/* Button - black to purple */
#echoes-chat [class*="bg-black"] { background: #5566cc !important; border-color: #5566cc !important; }
#echoes-chat [class*="bg-black"]:hover { background: #6b7aee !important; }
#echoes-chat button.bg-black { background: #5566cc !important; }
#echoes-chat button.bg-black:hover { background: #6b7aee !important; }
/* Button - #2C2C2C dark gray to deep purple */
#echoes-chat [class*="bg-\\[\\#2C2C2C\\]"] { background: #3a3a70 !important; }
#echoes-chat [class*="bg-\\[\\#2C2C2C\\]"]:hover { background: #4a4a88 !important; }
#echoes-chat [class*="bg-gray-800"] { background: #3a3a70 !important; }
/* Button text white to purple-white */
#echoes-chat :not(button):not(button *)[class*="text-white"] { color: #e0e0f0 !important; }
/* Input fields */
#echoes-chat input, #echoes-chat textarea, #echoes-chat [contenteditable] {
  background: #1e1e38 !important;
  color: #d0d0e8 !important;
  border-color: rgba(255,255,255,0.1) !important;
}
#echoes-chat input::placeholder, #echoes-chat textarea::placeholder { color: #555588 !important; }
/* Borders */
#echoes-chat .border-gray-200 { border-color: rgba(255,255,255,0.08) !important; }
#echoes-chat .border-gray-200\\/50 { border-color: rgba(255,255,255,0.06) !important; }
#echoes-chat .border-white\\/50 { border-color: rgba(255,255,255,0.06) !important; }
#echoes-chat .border-white\\/60 { border-color: rgba(255,255,255,0.08) !important; }
#echoes-chat .ring-black\\/5 { --tw-ring-color: rgba(255,255,255,0.05) !important; }
/* Home screen AppIcon text */
#echoes-chat .text-gray-700.group-hover\\:text-black { color: #aabbdd !important; }
#echoes-chat .text-gray-700.group-hover\\:text-black:hover { color: #ccddff !important; }
/* Home screen AppIcon colors (via CSS filter to invert bright icons) */
#echoes-chat .glass-panel svg { stroke: #aabbdd; }
#echoes-chat .glass-panel:has(img) svg, #echoes-chat [class*="bg-white"] svg { stroke: #aabbdd; }
/* Chat/Forum bottom bar */
#echoes-chat [class*="rounded-\\[24px\\]"].glass-panel {
  background: rgba(30,30,60,0.75) !important;
  border-color: rgba(255,255,255,0.08) !important;
}
#echoes-chat [class*="rounded-\\[24px\\]"].glass-panel svg,
#echoes-chat .flex.justify-around svg { stroke: #99aadd; }
/* Message bubbles */
#echoes-chat [class*="bg-\\[\\#1a1a1a\\]"] { background: #252540 !important; color: #d0d0e8 !important; }
/* Options/Labels */ 
#echoes-chat [class*="bg-black"] { background: #5566cc !important; }
#echoes-chat .bg-green-500 { background: #44aa77 !important; }
/* Modal background stays semi-transparent */
#echoes-chat .fixed.inset-0 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .bg-white\\/90 { background: rgba(30,30,60,0.85) !important; backdrop-filter: blur(20px) !important; -webkit-backdrop-filter: blur(20px) !important; }
#echoes-chat [class*="bg-white"].rounded-2xl { background: #252540 !important; opacity: 0.95; }
#echoes-chat .bg-black\\/50 { background: rgba(0,0,0,0.5) !important; }
/* Action menu, sticker panel, modal cards keep original dark style */
#echoes-chat .bg-\[\#1a1a1a\]\/95 { background: rgba(26,26,26,0.95) !important; color: #fff !important; }
#echoes-chat .bg-\[\#1a1a1a\]\/95 * { color: #fff !important; }
#echoes-chat .bg-\[\#1a1a1a\]\\/95 { background: rgba(26,26,26,0.95) !important; color: #fff !important; }
#echoes-chat [class*="bg-[#1a1a1a]"] { background: #1a1a1a !important; color: #fff !important; }
#echoes-chat [class*="bg-[#1a1a1a]"] * { color: #fff !important; }
#echoes-chat .text-red-300 { color: #fc8181 !important; }
#echoes-chat .hover\:bg-white\/20:hover { background: rgba(255,255,255,0.2) !important; }
#echoes-chat .border-white\/20 { border-color: rgba(255,255,255,0.2) !important; }
#echoes-chat .bg-black\/50 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .fixed.inset-0 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .bg-white\\/90 { opacity:0.92 !important; backdrop-filter: blur(20px) !important; -webkit-backdrop-filter: blur(20px) !important; }
#echoes-chat [class*="bg-white"].rounded-2xl { opacity: 0.95 !important; }
#echoes-chat .text-red-500 { color: #ff7799 !important; }

/* Toggle theme color */
#echoes-chat .bg-green-500 { background: #5566cc !important; }
#echoes-chat .bg-gray-300 { background: #3a3a6a !important; }
/* Button selected state white text */
#echoes-chat button.bg-black { color: #fff !important; }
#echoes-chat button.bg-black:hover { color: #fff !important; }
#echoes-chat button.bg-black * { color: #fff !important; }
#echoes-chat button.bg-black:hover * { color: #fff !important; }
#echoes-chat [class*="bg-black"][class*="text-white"] { color: #fff !important; }
`
  },
  {
    id: "sweet",
    name: "Sweet Dream Bubble",
    desc: "Grey-pink polka dots, cute bear vibe",
    preview: "bg-[#f0e8ed]",
    previewColor: "#f0e8ed",
    borderColor: "#d4959a",
    css: `/* Sweet Dream Bubble */
#echoes-chat { --skin-bg: #f0e8ed; --skin-surface: #f5eff4; --skin-card: #faf5f8; --skin-text: #4a3548; --skin-sub: #8b7088; --skin-accent: #d4959a; --skin-accent-hover: #c08088; }
#echoes-chat { background-color:#f0e8ed !important; background-image:radial-gradient(circle,rgba(212,149,154,0.45) 1.5px,transparent 1.5px) !important; background-size:18px 18px !important; color:#4a3548 !important; }
#echoes-chat .bg-\\[\\#F2F2F7\\] { background-color:#f0e8ed !important; background-image:radial-gradient(circle,rgba(212,149,154,0.45) 1.5px,transparent 1.5px) !important; background-size:18px 18px !important; }
#echoes-chat .bg-\\[\\#EBEBF0\\] { background:#e8dde4 !important; }
#echoes-chat [class*="bg-\\[\\#F2F2F7"] { background-color:#f0e8ed !important; background-image:radial-gradient(circle,rgba(212,149,154,0.45) 1.5px,transparent 1.5px) !important; background-size:18px 18px !important; }
#echoes-chat [class*="bg-\\[\\#EBEBF0"] { background:#e8dde4 !important; }
#echoes-chat .bg-blue-50\\/50 { background:#f5e0e5 !important; }
#echoes-chat .bg-gray-100\\/60 { background:#f0dce2 !important; }
#echoes-chat .bg-gray-300\\/50 { background:#e8d4da !important; }
#echoes-chat .bg-white\\/50 { background:#faf5f8 !important; }
#echoes-chat .text-\\[\\#1a1a1a\\] { color:#4a3548 !important; }
#echoes-chat .text-\\[\\#2C2C2C\\] { color:#5c4658 !important; }
#echoes-chat .text-gray-800 { color:#4a3548 !important; }
#echoes-chat .text-gray-700 { color:#5c4658 !important; }
#echoes-chat .text-gray-600 { color:#6b5568 !important; }
#echoes-chat .text-gray-500 { color:#8b7088 !important; }
#echoes-chat .text-gray-400 { color:#a088a0 !important; }
#echoes-chat .text-gray-300 { color:#c0a8b8 !important; }
#echoes-chat header { color:#d4959a !important; }
#echoes-chat .glass-panel { background:#faf5f8 !important; backdrop-filter:none !important; -webkit-backdrop-filter:none !important; border:1.5px solid rgba(212,149,154,0.3) !important; border-color:rgba(212,149,154,0.3) !important; color:#4a3548 !important; border-radius:18px !important; }
#echoes-chat .glass-card { background:#fff !important; backdrop-filter:none !important; -webkit-backdrop-filter:none !important; border:1.5px solid rgba(212,149,154,0.25) !important; border-color:rgba(212,149,154,0.25) !important; border-radius:16px !important; color:#4a3548 !important; }
#echoes-chat .glass-card label { color:#5c4658 !important; }
#echoes-chat .glass-card p,#echoes-chat .glass-card span { color:#8b7088 !important; }
#echoes-chat [class*="bg-white"] { background:#faf5f8 !important; border-radius:14px !important; }
#echoes-chat [class*="bg-gray-50"] { background:#faf5f8 !important; }
#echoes-chat [class*="bg-gray-100"] { background:#fff0f3 !important; }
#echoes-chat [class*="bg-black"] { background:#d4959a !important; border-color:#d4959a !important; }
#echoes-chat [class*="bg-black"]:hover { background:#c08088 !important; }
#echoes-chat button.bg-black { background:#d4959a !important; }
#echoes-chat button.bg-black:hover { background:#c08088 !important; }
#echoes-chat [class*="bg-\\[\\#2C2C2C\\]"] { background:#d4959a !important; }
#echoes-chat [class*="bg-\\[\\#2C2C2C\\]"]:hover { background:#c08088 !important; }
#echoes-chat [class*="bg-gray-800"] { background:#d4959a !important; }
#echoes-chat :not(button):not(button *)[class*="text-white"] { color:#fff !important; }
#echoes-chat input,#echoes-chat textarea { background:#faf5f8 !important; color:#4a3548 !important; border:1.5px solid rgba(212,149,154,0.35) !important; border-color:rgba(212,149,154,0.35) !important; border-radius:12px !important; }
#echoes-chat input::placeholder,#echoes-chat textarea::placeholder { color:#c0a8b8 !important; }
#echoes-chat .border-gray-200 { border-color:rgba(212,149,154,0.2) !important; }
#echoes-chat .border-gray-200\\/50 { border-color:rgba(212,149,154,0.15) !important; }
#echoes-chat .border-white\\/50 { border-color:rgba(212,149,154,0.25) !important; }
#echoes-chat .border-white\\/60 { border-color:rgba(212,149,154,0.3) !important; }
#echoes-chat .ring-black\\/5 { --tw-ring-color:rgba(212,149,154,0.06) !important; }
#echoes-chat .border-white { border-color:rgba(212,149,154,0.25) !important; }
#echoes-chat .text-gray-700.group-hover\\:text-black { color:#8b7088 !important; }
#echoes-chat .text-gray-700.group-hover\\:text-black:hover { color:#d4959a !important; }
#echoes-chat .glass-panel svg { stroke:#8b7088; }
#echoes-chat [class*="bg-white"] svg { stroke:#8b7088; }
#echoes-chat [class*="rounded-\\[24px\\]"].glass-panel { background:#faf5f8 !important; border-color:rgba(212,149,154,0.3) !important; border-radius:18px !important; }
#echoes-chat [class*="rounded-\\[24px\\]"].glass-panel svg,#echoes-chat .flex.justify-around svg { stroke:#8b7088; }
#echoes-chat [class*="bg-\\[\\#1a1a1a\\]"] { background:#faf5f8 !important; color:#4a3548 !important; }
#echoes-chat [class*="bg-\\[\\#1a1a1a\\]"] * { color:#4a3548 !important; }
#echoes-chat .text-red-300 { color:#d4959a !important; }
#echoes-chat .hover\:bg-white\/20:active, #echoes-chat .hover\:bg-white\/20:hover { background: rgba(74,53,72,0.08) !important; }
#echoes-chat .hover\:bg-red-500\/50:active, #echoes-chat .hover\:bg-red-500\/50:hover { background: rgba(212,149,154,0.15) !important; }
#echoes-chat .bg-green-500 { background:#b8a8c8 !important; }
#echoes-chat .text-red-500 { color:#cc8899 !important; }
#echoes-chat .bg-green-50\\/50 { background:#eee8f4 !important; }
#echoes-chat .bg-green-100 { background:#e8dcee !important; }
#echoes-chat .text-green-700 { color:#9b8bb0 !important; }
#echoes-chat .text-green-600 { color:#a898b8 !important; }
#echoes-chat .border-green-100 { border-color:#ddd0e4 !important; }
#echoes-chat [class*="rounded-lg"],#echoes-chat [class*="rounded-xl"],#echoes-chat [class*="rounded-2xl"],#echoes-chat [class*="rounded-\\[16px\\]"],#echoes-chat [class*="rounded-\\[22px\\]"],#echoes-chat [class*="rounded-\\[24px\\]"],#echoes-chat [class*="rounded-full"],#echoes-chat [class*="rounded-\\[48px\\]"] { border-radius:18px !important; }
#echoes-chat [class*="rounded-\\[48px\\]"] { border-radius:36px !important; }
#echoes-chat [class*="rounded-full"] { border-radius:9999px !important; }
/* Bear replaces Life Circle icon */
#echoes-chat [data-app-link="Life Circle"] svg { display:none !important; }
#echoes-chat [data-app-link="Life Circle"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./pink-bear.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Bow replaces Interface Style title icon */
#echoes-chat h3[data-section-icon="palette"] svg { display:none !important; }
#echoes-chat h3[data-section-icon="palette"]::before { content:""; display:inline-block; width:12px; height:12px; background-image:url("./bow.png"); background-size:contain; background-repeat:no-repeat; vertical-align:middle; }
/* Bow replaces Personalization app icon */
#echoes-chat [data-app-link="Personalization"] svg { display:none !important; }
#echoes-chat [data-app-link="Personalization"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./bow.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Lollipop replaces System Settings icon */
#echoes-chat [data-app-link="System Settings"] svg { display:none !important; }
#echoes-chat [data-app-link="System Settings"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./pink-lollipop.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Telephone replaces Browser icon */
#echoes-chat [data-app-link="Browser"] svg { display:none !important; }
#echoes-chat [data-app-link="Browser"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./pink-telephone.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Heart replaces music icon */
#echoes-chat [data-app-link="共鸣旋律"] svg { display:none !important; }
#echoes-chat [data-app-link="共鸣旋律"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./pink-heart.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Bow replaces Smart Home icon */
#echoes-chat [data-app-link="Smart Home"] svg { display:none !important; }
#echoes-chat [data-app-link="Smart Home"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./pink-butterfly.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Strawberry chocolate replaces Diaries icon */
#echoes-chat [data-app-link="Diaries"] svg { display:none !important; }
#echoes-chat [data-app-link="Diaries"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./strawberry-chocolate.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Candle replaces Life Traces icon */
#echoes-chat [data-app-link="Life Traces"] svg { display:none !important; }
#echoes-chat [data-app-link="Life Traces"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./pink-candle.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Mushroom replaces World Book icon */
#echoes-chat [data-app-link="World Book"] svg { display:none !important; }
#echoes-chat [data-app-link="World Book"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./pink-mushroom.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Drink replaces bottom chat bar icon */
#echoes-chat [data-icon="chat"] svg { display:none !important; }
#echoes-chat [data-icon="chat"]::before { content:""; display:inline-block; width:24px; height:24px; background-image:url("./pink-drink.png"); background-size:contain; background-repeat:no-repeat; vertical-align:middle; }
/* Headband replaces Icon Customization title icon */
#echoes-chat h3[data-section-icon="customize"] svg { display:none !important; }
#echoes-chat h3[data-section-icon="customize"]::before { content:""; display:inline-block; width:12px; height:12px; background-image:url("./pink-hair-band.png"); background-size:contain; background-repeat:no-repeat; vertical-align:middle; }
/* Notebook replaces Display & Layout title icon */
#echoes-chat h3[data-section-icon="display"] svg { display:none !important; }
#echoes-chat h3[data-section-icon="display"]::before { content:""; display:inline-block; width:12px; height:12px; background-image:url("./pink-laptop.png"); background-size:contain; background-repeat:no-repeat; vertical-align:middle; }
/* Toy replaces browser refresh button icon */
#echoes-chat [data-app-link="浏览器刷新"] svg { display:none !important; }
#echoes-chat [data-app-link="浏览器刷新"]::before { content:""; display:inline-block; width:16px; height:16px; background-image:url("./pink-toy.png"); background-size:contain; background-repeat:no-repeat; vertical-align:middle; margin-right:6px; }
/* Toy replaces Feedback button icon */
#echoes-chat [data-app-link="Feedback"] svg { display:none !important; }
#echoes-chat [data-app-link="Feedback"] .glass-panel::after { content:""; position:absolute; inset:6px; background-image:url("./pink-toy.png"); background-size:contain; background-repeat:no-repeat; background-position:center; }
/* Modal stays semi-transparent */
#echoes-chat .fixed.inset-0 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .bg-white\\/90 { background: rgba(250,245,248,0.85) !important; backdrop-filter: blur(20px) !important; -webkit-backdrop-filter: blur(20px) !important; }
#echoes-chat [class*="bg-white"].rounded-2xl { background: rgba(250,245,248,0.92) !important; }
#echoes-chat .bg-black\/50 { background: rgba(0,0,0,0.5) !important; }
#echoes-chat .bg-black\/40 { background: rgba(0,0,0,0.4) !important; }

/* Toggle theme color */
#echoes-chat .bg-green-500 { background: #d4959a !important; }
#echoes-chat .bg-gray-300 { background: #e0d0d8 !important; }
/* Button selected state white text */
#echoes-chat button.bg-black { color: #fff !important; }
#echoes-chat button.bg-black:hover { color: #fff !important; }
#echoes-chat button.bg-black * { color: #fff !important; }
#echoes-chat button.bg-black:hover * { color: #fff !important; }
#echoes-chat [class*="bg-black"][class*="text-white"] { color: #fff !important; }
`,
  }
];

const PersonalizationPanel = ({
  // --- Display Settings Props ---

  // --- Font Settings Props ---
  fontName,
  handleResetFont,
  handleFontUrlSubmit,
  inputUrl,
  setInputUrl,

  // --- Icon Customization Props ---
  appList,
  customIcons,
  handleAppIconUpload,
  handleResetIcon,

  // --- Skin Props ---
  skinCSS,
  setSkinCSS,
  selectedSkin,
  setSelectedSkin,
}) => {
  return (
    <div className="space-y-8 pt-4 pb-20 px-1">
      {/* ---------------- SECTION 1: Display & Layout ---------------- */}
      <section>
        <h3 data-section-icon="display" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 border-b border-gray-200/50 pb-1 flex items-center gap-2" >
          <Monitor size={10} /> Display & Layout
        </h3>

        {/* Font Settings */}
        <div className="glass-card p-4 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Type size={12} className="text-gray-500" />
              <label className="text-xs font-bold text-gray-700">
                System Font
              </label>
            </div>
            <button
              onClick={handleResetFont}
              className="text-[10px] text-red-500 hover:underline flex items-center gap-1"
            >
              <RotateCcw size={8} /> Reset
            </button>
          </div>

          <div className="flex gap-2">
            <input
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Paste font URL (e.g. https://...)"
              className="flex-grow p-2 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none focus:border-black placeholder:text-gray-300"
            />
            <button
              onClick={handleFontUrlSubmit}
              className="px-3 bg-black text-white rounded-lg text-xs font-bold whitespace-nowrap"
            >
              Apply
            </button>
          </div>
          <p className="text-[9px] text-gray-400 truncate">
            Current: {fontName || "Default font"}
          </p>
        </div>
      </section>

      {/* ---------------- SECTION: Interface Style ---------------- */}
      <section>
        <h3 data-section-icon="palette" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 border-b border-gray-200/50 pb-1 flex items-center gap-2">
          <Palette size={10} /> Interface Style
        </h3>

        {/* Official Skins */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {OFFICIAL_SKINS.filter((s) => s.id !== "neon" && s.id !== "pixel" && s.id !== "latte").map((skin) => (
            <button
              key={skin.id}
              onClick={() => {
                if (selectedSkin === skin.id) {
                  setSelectedSkin("");
                  setSkinCSS("");
                } else {
                  setSelectedSkin(skin.id);
                  setSkinCSS(skin.css);
                }
              }}
              className={`p-2 rounded-xl border text-center transition-all ${
                selectedSkin === skin.id
                  ? "bg-gray-50"
                  : "border-gray-200 hover:border-gray-400"
              }`}
              style={selectedSkin === skin.id ? { borderColor: skin.borderColor, borderWidth: '1px', borderStyle: 'solid' } : {}}
            >
              <div className="w-full h-8 rounded-lg mb-1" style={{ backgroundColor: skin.previewColor }}></div>
              <div className="text-[11px] font-bold text-gray-700 leading-tight">{skin.name}</div>
            </button>
          ))}
        </div>

        {/* Custom CSS */}
        <div className="glass-card p-4 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Type size={12} className="text-gray-500" />
              <label className="text-xs font-bold text-gray-700">
                Custom Style
              </label>
            </div>
            {skinCSS && (
              <button
                onClick={() => { setSkinCSS(""); setSelectedSkin(""); }}
                className="text-[10px] text-red-500 hover:underline flex items-center gap-1"
              >
                <RotateCcw size={8} /> Reset
              </button>
            )}
          </div>
          <textarea
            value={skinCSS}
            onChange={(e) => {
              setSkinCSS(e.target.value);
              if (selectedSkin && !OFFICIAL_SKINS.some(s => s.css === e.target.value)) {
                setSelectedSkin("");
              }
            }}
            placeholder="Paste CSS code to customize interface style..."
            rows={5}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono outline-none focus:border-black resize-y"
          />
          <p className="text-[9px] text-gray-400">
            Use <code className="bg-gray-100 px-1 rounded">#echoes-chat</code> as the selector prefix,
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = './theme-guide.md';
                link.download = 'theme-guide.md';
                link.click();
              }}
              className="text-blue-500 underline ml-1 cursor-pointer"
            >
              Download Theme Guide
            </button>
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 2: Icon Customization ---------------- */}
      <section>
        <h3 data-section-icon="customize" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 border-b border-gray-200/50 pb-1 flex items-center gap-2">
          <Asterisk size={10} /> Icon Customization
        </h3>

        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          {appList.map((app) => {
            const Icon = app.icon;

            return (
              <div key={app.id} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-[16px] bg-white border border-gray-200 flex items-center justify-center overflow-hidden relative group cursor-pointer shadow-sm">
                  {customIcons[app.id] ? (
                    <img
                      src={customIcons[app.id]}
                      className="w-full h-full object-cover"
                      alt={app.label}
                    />
                  ) : (
                    Icon && <Icon size={20} className="text-gray-400" />
                  )}

                  <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                    <Upload size={16} className="text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleAppIconUpload(e, app.id)}
                    />
                  </label>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-gray-600 font-medium">
                    {app.label}
                  </span>

                  {customIcons[app.id] && (
                    <button
                      onClick={() => handleResetIcon(app.id)}
                      className="text-[9px] text-red-400 hover:text-red-600 mt-1 flex items-center gap-0.5 scale-90"
                    >
                      <RotateCcw size={8} /> Reset
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PersonalizationPanel;