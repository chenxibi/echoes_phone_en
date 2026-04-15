import React, { useState } from "react";
import { Banknote } from "lucide-react"; // assuming lucide-react
import mapBg from "../map_bg.png";

export const VoiceMessageBubble = ({ msg, isMe }) => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const cleanText = msg.text.replace("[Voice message] ", "");
  const duration = Math.min(60, Math.max(2, Math.ceil(cleanText.length / 3)));

  const handleClick = () => {
    setShowTranscript(!showTranscript);

    // 触发 1.5秒 的丝滑波动动画
    if (!isPlaying) {
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 600);
    }
  };

  // 基础静态高度 (静止时的样子)
  const baseHeights = [40, 70, 100, 60, 80, 40, 30, 50];

  return (
    <>
      {/* 1. 定义一个局部的 CSS 动画关键帧 */}
      <style>{`
        @keyframes visual-wave {
          0% { height: 20%; }
          50% { height: 100%; }
          100% { height: 20%; }
        }
      `}</style>

      <div
        onClick={handleClick}
        className={`px-4 py-3 rounded-2xl shadow-sm text-sm cursor-pointer transition-all select-none group ${
          isMe
            ? "bg-[#2C2C2C] text-white rounded-tr-none hover:bg-[#3a3a3a]"
            : "bg-white border border-gray-100 text-gray-800 rounded-tl-none hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* 2. 拟真声波条 (容器) */}
          <div className="flex items-center gap-[2px] h-4 select-none">
            {baseHeights.map((h, idx) => {
              const animationDelay = `-${idx * 0.15 + Math.random() * 0.5}s`;

              return (
                <div
                  key={idx}
                  // [修改] 宽度从 w-1 改为 w-[2px]，更加精致
                  className={`w-[2px] rounded-full ${
                    isMe ? "bg-white/90" : "bg-gray-400"
                  }`}
                  style={{
                    height: isPlaying ? "auto" : `${h}%`,
                    animation: isPlaying
                      ? `visual-wave 0.6s ease-in-out infinite`
                      : "none",
                    animationDelay: isPlaying ? animationDelay : "0s",
                    transition: "height 0.3s ease-out",
                  }}
                ></div>
              );
            })}
          </div>

          {/* 时长 */}
          <div
            className={`text-xs font-mono font-bold ${
              isMe ? "text-white/60" : "text-gray-400"
            }`}
          >
            {duration}''
          </div>
        </div>

        {/* 语音转文字Content */}
        {showTranscript && (
          <div
            className={`mt-3 text-xs leading-relaxed opacity-80 border-l-2 pl-2 pt-1 animate-in slide-in-from-top-1 duration-200 ${
              isMe ? "border-white/20" : "border-gray-200"
            }`}
          >
            {cleanText}
          </div>
        )}
      </div>
    </>
  );
};

export const TransferBubble = ({ msg, isMe, onInteract }) => {
  const { amount, status, note } = msg.transfer || {
    amount: 0,
    status: "pending",
    note: "",
  };
  const isPending = status === "pending";
  const isAccepted = status === "accepted";

  // 颜色逻辑
  const bgColor = isPending ? "bg-[#ff9f43]" : "bg-[#FFBD7E]";
  const textColor = isPending ? "text-white" : "text-white/90";

  return (
    <div
      className={`w-64 p-3 rounded-xl select-none transition-all shadow-sm ${bgColor} ${textColor} ${
        isMe ? "rounded-tr-none" : "rounded-tl-none"
      }`}
    >
      {/* 1. 顶部：图标与金额 */}
      {/* 如果没有Note，底部留一:00 margin (mb-3)，如果有Note，mb-1 紧凑一:00 */}
      <div className={`flex items-center gap-3 ${note ? "mb-1" : "mb-3"}`}>
        <div className="p-2.5 rounded-full shrink-0 bg-white/20 text-white">
          <Banknote size={24} />
        </div>
        <div className="overflow-hidden min-w-0">
          <div className="text-[10px] font-bold opacity-90 mb-0.5 truncate">
            {isMe ? "Sent transfer" : "Received transfer"}
          </div>
          <div className="text-xl font-bold font-mono tracking-tight truncate">
            ¥ {amount}
          </div>
        </div>
      </div>

      {/* 2. Note区域 (仅当有Note时显示) */}
      {note && (
        <div className="text-xs opacity-80 mb-2 pl-[52px] leading-tight break-words font-medium">
          {note}
        </div>
      )}

      {/* 3. 底部：Status栏 */}
      <div className="flex justify-between items-center border-t border-white/20 pt-2">
        <span className="text-xs font-bold opacity-90">
          {isPending ? "Awaiting" : isAccepted ? "Received" : "Refunded"}
        </span>

        {/* 交互按钮 */}
        {!isMe && isPending && (
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onInteract("reject");
              }}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white text-[10px] rounded-md font-bold backdrop-blur-sm"
            >
              Return
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onInteract("accept");
              }}
              className="px-2 py-1 bg-white text-[#ff9f43] hover:bg-gray-50 text-[10px] rounded-md font-bold shadow-sm"
            >
              Accept
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const LocationBubble = ({ name, address }) => (
  <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden w-64 shadow-sm select-none">
    {/* 上半部min：地图背景图 */}
    <div className="h-24 bg-gray-100 relative">
      {/* 记得确保 mapBg Done经 import 进来了 */}
      <img
        src={mapBg}
        alt="Map"
        className="w-full h-full object-cover"
        draggable="false"
      />

      {/* Custom SVG 图标容器 - 绝对居中定位 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-3 drop-shadow-md">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#CE4A3A]" // here控制大小(w-8 h-8)and颜色(text-red-600)
          fill="currentColor" // 使用 currentColor 让它跟随 className 的颜色
        >
          <path d="M511.913993 63.989249C317.882076 63.989249 159.973123 221.898203 159.973123 415.930119c0 187.323366 315.473879 519.998656 328.890979 534.103813 6.020494 6.364522 14.449185 9.976818 23.221905 9.976818 0.172014 0 0.516042 0 0.688056 0 8.944734 0 17.545439-4.128339 23.393919-11.008903l109.22896-125.054258c145.179909-177.690576 218.629934-314.957836 218.629934-407.845456C864.026877 221.898203 706.117924 63.989249 511.913993 63.989249zM511.913993 575.903242c-88.415253 0-159.973123-71.55787-159.973123-159.973123s71.55787-159.973123 159.973123-159.973123 159.973123 71.55787 159.973123 159.973123S600.329246 575.903242 511.913993 575.903242z" />
        </svg>
      </div>
    </div>

    {/* 下半部min：文字Info */}
    <div className="p-3 bg-white">
      <div className="text-sm font-medium text-gray-900 truncate leading-tight mb-1">
        {name}
      </div>
      <div className="text-xs text-gray-500 truncate leading-tight">
        {address}
      </div>
    </div>
  </div>
);
