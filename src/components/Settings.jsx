import React, { useState } from "react";
import {
  CloudFog,
  RefreshCw,
  ChevronDown,
  FileText,
  Smartphone,
  AlertCircle,
  CheckCircle2,
  Plus,
  ToggleLeft,
  ToggleRight,
  Trash2,
  Upload,
  RotateCcw,
  Download,
  MapPin,
  Edit2,
} from "lucide-react";

const SettingsPanel = ({
  apiConfig,
  setApiConfig,
  connectionStatus,
  isFetchingModels,
  fetchModels,
  availableModels,
  testConnection,
  close,
  contextLimit,
  setContextLimit,
  memoryConfig,
  setMemoryConfig,
  longMemory,
  setLongMemory,
  triggerSummary,
  isSummarizing,
  chatStyle,
  setChatStyle,
  interactionMode,
  setInteractionMode,
  stickersEnabled,
  setStickersEnabled,
  getGroups,
  toggleStickerGroup,
  stickers,
  setStickers,
  stickerInputRef,
  handleStickerUpload,
  setEditingSticker,
  prompts,
  setPrompts,
  isFullscreen,
  toggleFullScreen,
  onExportChat,
  onImportChat,
  addStickerGroup,
  deleteStickerGroup,
  renameStickerGroup,
  handleBulkImport,
  customPrompt,
  fontName,
  handleResetFont,
  handleFontUrlSubmit,
  inputUrl,
  setInputUrl,
  simpleMode = false,
}) => (
  <div className="flex flex-col h-full">
    <div className="space-y-10 overflow-y-auto custom-scrollbar flex-grow px-1 pb-10">
      {/* ---------------------------------------------------------
          Connection
         --------------------------------------------------------- */}
      <section>
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200/50 pb-2">
          Connection
        </h3>
        <div className="glass-card p-4 rounded-xl space-y-4">
          {/* API Base URL */}
          <div>
            <label className="block text-[10px] uppercase text-gray-500 mb-1.5 font-bold">
              API Base URL
            </label>
            <input
              type="text"
              value={apiConfig.baseUrl}
              onChange={(e) =>
                setApiConfig((p) => ({ ...p, baseUrl: e.target.value }))
              }
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono outline-none focus:border-black transition-colors"
              placeholder="https://api.openai.com/v1"
            />
          </div>

          {/* API Key */}
          <div>
            <label className="block text-[10px] uppercase text-gray-500 mb-1.5 font-bold">
              API Key
            </label>
            <input
              type="password"
              value={apiConfig.key}
              onChange={(e) =>
                setApiConfig((p) => ({ ...p, key: e.target.value }))
              }
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono outline-none focus:border-black transition-colors"
              placeholder="sk-..."
            />
          </div>

          {/* Model Selection */}
          <div>
            <label className="block text-[10px] uppercase text-gray-500 mb-1.5 font-bold">
              Model
            </label>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                {availableModels.length > 0 ? (
                  <select
                    value={apiConfig.model}
                    onChange={(e) =>
                      setApiConfig((p) => ({ ...p, model: e.target.value }))
                    }
                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:border-black outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a model...
                    </option>
                    {availableModels.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder="gpt-4o"
                    value={apiConfig.model}
                    onChange={(e) =>
                      setApiConfig((p) => ({ ...p, model: e.target.value }))
                    }
                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:border-black outline-none transition-colors placeholder:text-gray-300"
                  />
                )}
                {availableModels.length > 0 && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={14} />
                  </div>
                )}
              </div>
              <button
                onClick={fetchModels}
                disabled={
                  isFetchingModels || !apiConfig.baseUrl || !apiConfig.key
                }
                className="px-4 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl transition-colors flex items-center justify-center text-gray-600 disabled:opacity-50"
              >
                {isFetchingModels ? (
                  <RefreshCw size={16} className="animate-spin" />
                ) : (
                  <CloudFog size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Test Connection Button */}
          <div className="pt-2">
            <button
              onClick={testConnection}
              disabled={
                !apiConfig.baseUrl ||
                !apiConfig.key ||
                connectionStatus === "testing"
              }
              className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md ${
                connectionStatus === "success"
                  ? "bg-green-600 text-white"
                  : connectionStatus === "error"
                    ? "bg-red-600 text-white"
                    : "bg-[#1a1a1a] text-white hover:bg-[#333]"
              }`}
            >
              {connectionStatus === "testing" && (
                <RefreshCw size={14} className="animate-spin" />
              )}
              {connectionStatus === "success" && <CheckCircle2 size={14} />}
              {connectionStatus === "error" && <AlertCircle size={14} />}
              {connectionStatus === "testing"
                ? "Connecting..."
                : connectionStatus === "success"
                  ? "Connected"
                  : connectionStatus === "error"
                    ? "Connection failed"
                    : "Test & Save"}
            </button>
          </div>
        </div>
      </section>

      {!simpleMode && (
        <>
          {/* ---------------------------------------------------------
          Context Memory
         --------------------------------------------------------- */}
          <section>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200/50 pb-2">
              Context
            </h3>
            <div className="glass-card p-4 rounded-xl flex items-center justify-between">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Context Memory (turns)
                </label>
                <p className="text-[10px] text-gray-400">
                  Counts by conversation turns. Multiple consecutive messages from the same person count as 1 turn.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="2"
                  max="50"
                  value={contextLimit}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val)) setContextLimit(val);
                  }}
                  className="w-16 p-2 bg-white border border-gray-200 rounded-lg text-center text-xs font-mono outline-none focus:border-black"
                />
                <span className="text-[10px] text-gray-400">turns</span>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------
          Long-term Memory
         --------------------------------------------------------- */}
          <section>
            <div className="flex justify-between items-center mb-4 border-b border-gray-200/50 pb-2">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Long-term Memory
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400">
                  {memoryConfig.enabled ? "Enabled" : "Disabled"}
                </span>
                <button
                  onClick={() =>
                    setMemoryConfig((p) => ({ ...p, enabled: !p.enabled }))
                  }
                  className={`w-8 h-4 rounded-full relative transition-colors ${
                    memoryConfig.enabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                      memoryConfig.enabled ? "left-4.5" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl space-y-4">
              {/* Threshold */}
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-600">
                  Auto Summary
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="5"
                    max="100"
                    value={memoryConfig.threshold}
                    onChange={(e) =>
                      setMemoryConfig((p) => ({
                        ...p,
                        threshold: parseInt(e.target.value) || 10,
                      }))
                    }
                    className="w-16 p-2 bg-white border border-gray-200 rounded-lg text-center text-xs font-mono outline-none focus:border-black"
                  />
                  <span className="text-[10px] text-gray-400">messages to trigger</span>
                </div>
              </div>

              {/* Memory Text + Manual Button */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400">
                    Memory Details (Prompt)
                  </label>
                  <button
                    onClick={triggerSummary}
                    disabled={isSummarizing || !memoryConfig.enabled}
                    className="flex items-center gap-1 text-[10px] text-blue-600 hover:underline disabled:opacity-50 disabled:no-underline disabled:text-gray-400 cursor-pointer"
                  >
                    {isSummarizing ? (
                      <RefreshCw size={10} className="animate-spin" />
                    ) : (
                      <FileText size={10} />
                    )}
                    Summarize Now
                  </button>
                </div>
                <textarea
                  value={longMemory}
                  onChange={(e) => setLongMemory(e.target.value)}
                  className="w-full h-32 p-3 bg-white/50 border border-gray-200 rounded-xl text-xs leading-relaxed resize-none focus:border-black outline-none custom-scrollbar transition-colors focus:bg-white"
                  placeholder="When enabled, the character will automatically build long-term memories about you here..."
                />
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------
          SECTION 3: Chat Settings
         --------------------------------------------------------- */}
          {chatStyle && (
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200/50 pb-2">
                Chat Settings
              </h3>
              <div className="glass-card p-4 rounded-xl space-y-4">
                {/* Style */}
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-500 mb-2">
                    Style
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {
                        id: "dialogue",
                        label: "Chat",
                        desc: "Realistic messaging",
                      },
                      {
                        id: "novel",
                        label: "Novel",
                        desc: "Long narrative",
                      },
                      {
                        id: "brackets",
                        label: "Script",
                        desc: "Action in brackets",
                      },
                    ].map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setChatStyle(style.id)}
                        className={`flex flex-col items-center justify-center py-2 rounded-lg transition-all border ${
                          chatStyle === style.id
                            ? "bg-black text-white border-black shadow-md"
                            : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-xs font-bold">{style.label}</span>
                        <span
                          className={`text-[8px] mt-0.5 ${
                            chatStyle === style.id
                              ? "text-gray-300"
                              : "text-gray-400"
                          }`}
                        >
                          {style.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interaction Mode */}
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-500 mb-2">
                    Mode
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setInteractionMode("online")}
                      className={`flex-1 py-2 text-xs rounded-lg transition-colors flex items-center justify-center gap-1 ${
                        interactionMode === "online"
                          ? "bg-black text-white shadow-md"
                          : "bg-white/50 text-gray-500 hover:bg-white"
                      }`}
                    >
                      <Smartphone size={12} /> Online
                    </button>
                    <button
                      onClick={() => setInteractionMode("offline")}
                      className={`flex-1 py-2 text-xs rounded-lg transition-colors flex items-center justify-center gap-1 ${
                        interactionMode === "offline"
                          ? "bg-black text-white shadow-md"
                          : "bg-white/50 text-gray-500 hover:bg-white"
                      }`}
                    >
                      <MapPin size={12} /> Reality
                    </button>
                  </div>
                </div>

                {/* Sticker Management */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-[10px] font-bold uppercase text-gray-500 mr-auto">
                      Character Sticker Library
                    </label>
                    <button
                      onClick={() => stickerInputRef.current.click()}
                      className="flex items-center justify-center gap-1 p-0 text-[10px] text-gray-400 hover:text-[#7A2A3A] transition-colors"
                      title="Upload image"
                    >
                      <Plus size={10} />
                      <span>Upload</span>
                    </button>

                    <button
                      onClick={async () => {
                        const input = await customPrompt("Enter sticker URLs for bulk import", "", "Bulk Import");
                        if (input) handleBulkImport(input, "char");
                      }}
                      className="flex items-center justify-center gap-1 pl-1 pr-3 text-[10px] text-gray-400 hover:text-blue-500 transition-colors"
                      title="One-click import via link"
                    >
                      <Download size={10} />
                      <span>Bulk</span>
                    </button>

                    <button
                      onClick={() => setStickersEnabled(!stickersEnabled)}
                      className={`w-8 h-4 rounded-full relative transition-colors ${
                        stickersEnabled ? "bg-[#7A2A3A]" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                          stickersEnabled ? "left-4.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {stickersEnabled && (
                    <div className="space-y-4">
                      {getGroups(stickers).map((group) => (
                        <StickerGroup
                          key={group}
                          group={group}
                          stickers={stickers}
                          toggleStickerGroup={toggleStickerGroup}
                          setEditingSticker={setEditingSticker}
                          handleBulkImport={handleBulkImport}
                          deleteStickerGroup={deleteStickerGroup}
                          renameStickerGroup={renameStickerGroup}
                          handleStickerUpload={handleStickerUpload}
                        />
                      ))}

                      <input
                        type="file"
                        ref={stickerInputRef}
                        className="hidden"
                        onChange={(e) => handleStickerUpload(e, "char")}
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          <section>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200/50 pb-2">
              Data Management
            </h3>
            <div className="glass-card p-4 rounded-xl space-y-3">
              <p className="text-[9px] text-gray-400 mb-2">
                Export your chat history as a file, or restore from a backup.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onExportChat}
                  className="flex-1 py-3 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Download size={14} />
                  Export Backup
                </button>

                <label className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                  <Upload size={14} />
                  Import Backup
                  <input
                    type="file"
                    accept=".json"
                    className="hidden"
                    onChange={onImportChat}
                  />
                </label>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  </div>
);

/* --- HELPER COMPONENTS --- */
const StickerEditorModal = ({ sticker, onSave, onDelete, onClose }) => {
  const [desc, setDesc] = useState(sticker.desc);

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-sm rounded-2xl p-4 shadow-2xl flex flex-col gap-4">
        <h3 className="text-sm font-bold text-gray-700">Edit Sticker</h3>
        <div className="aspect-square w-32 mx-auto bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
          <img src={sticker.url} className="w-full h-full object-cover" />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase text-gray-400">
            Description (character picks stickers by this)
          </label>
          <textarea
            className="w-full h-20 p-2 text-xs border border-gray-200 rounded-lg mt-1 resize-none focus:border-black outline-none"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onDelete(sticker.id)}
            className="flex-1 py-2 bg-red-50 text-red-500 rounded-lg text-xs font-bold hover:bg-red-100"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(sticker.id, desc)}
            className="flex-1 py-2 bg-black text-white rounded-lg text-xs font-bold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// Sticker Group Component
const StickerGroup = ({
  group,
  stickers,
  toggleStickerGroup,
  setEditingSticker,
  deleteStickerGroup,
  renameStickerGroup,
  handleStickerUpload,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const groupStickers = stickers.filter((s) => s.group === group);
  const visibleStickers = groupStickers.filter((s) => !s.isPlaceholder);

  const isGroupEnabled = groupStickers.every((s) => s.enabled !== false);

  return (
    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 transition-all mb-3">
      {/* Header */}
      <div className="flex justify-between items-center h-6">
        <div
          className="flex items-center gap-2 cursor-pointer h-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div
            className={`transition-transform duration-300 text-gray-400 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown size={14} />
          </div>
          <h4 className="text-xs font-bold text-gray-700 select-none">
            {group}
          </h4>
          <span className="text-[9px] text-gray-400">
            ({visibleStickers.length})
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => renameStickerGroup(group)}
            className="text-gray-300 hover:text-blue-500 p-1 transition-colors"
            title="Rename Library"
          >
            <Edit2 size={12} />
          </button>

          <button
            onClick={() => deleteStickerGroup(group)}
            className="text-gray-300 hover:text-red-500 p-1 transition-colors"
            title="Delete Library"
          >
            <Trash2 size={12} />
          </button>

          <div className="w-px h-3 bg-gray-200 mx-1"></div>

          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleStickerGroup(group, !isGroupEnabled);
            }}
          >
            {isGroupEnabled ? (
              <ToggleRight
                size={18}
                className="text-[#7A2A3A] drop-shadow-sm"
              />
            ) : (
              <ToggleLeft size={18} className="text-gray-300" />
            )}
          </div>
        </div>
      </div>

      {/* Sticker Grid */}
      {isExpanded && (
        <div
          className={`pt-3 mt-2 border-t border-gray-200/50 transition-all animate-in slide-in-from-top-1 ${
            isGroupEnabled
              ? "opacity-100"
              : "opacity-40 grayscale pointer-events-none"
          }`}
        >
          {visibleStickers.length === 0 && (
            <div className="text-center py-4 text-[10px] text-gray-400 italic">
              No stickers yet, upload some
            </div>
          )}

          <div className="grid grid-cols-4 gap-3">
            {visibleStickers.map((s) => (
              <div
                key={s.id}
                className="aspect-square bg-white rounded-xl overflow-hidden relative group cursor-pointer border border-gray-100"
                onClick={() => setEditingSticker({ ...s, source: "char" })}
              >
                <img src={s.url} className="w-full h-full object-cover" />

                {!s.enabled && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
                )}
              </div>
            ))}

            <label
              className="
                    aspect-square border border-dashed border-gray-300 rounded-xl
                    flex flex-col items-center justify-center cursor-pointer
                    text-gray-400 hover:text-[#7A2A3A] hover:border-[#7A2A3A] hover:bg-white
                    transition-all duration-300 relative
                "
            >
              <Plus size={16} />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleStickerUpload(e, "char", group)}
                onClick={(e) => (e.target.value = null)}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
