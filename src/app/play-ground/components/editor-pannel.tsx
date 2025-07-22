"use client";

import { Editor } from "@monaco-editor/react";
import React, { useState } from "react"; // Added useState
import { IoShareSocial } from "react-icons/io5";

type EditorPanelProps = {
  code: string;
  setCode: (val: string) => void;
  language: string;
  layoutMode: boolean;
};

export default function EditorPanel({
  code,
  setCode,
  language,
  layoutMode,
}: EditorPanelProps) {
  // State for the share modal
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [clipTitle, setClipTitle] = useState("");
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSaveClip = () => {
    if (!clipTitle.trim()) {
      alert("Please enter a title for your clip.");
      return;
    }

    try {
      // 1. Get existing clips from localStorage
      const existingClipsRaw = localStorage.getItem("codeClips");
      const existingClips = existingClipsRaw ? JSON.parse(existingClipsRaw) : [];

      // 2. Create the new clip object
      const newClip = {
        id: Date.now(), // Use a timestamp for a simple unique ID
        title: clipTitle,
        language: language,
        author: "local_user", // Placeholder author for local saves
        avatarUrl: `https://i.pravatar.cc/150?u=local_user_${Date.now()}`,
        code: code,
      };

      // 3. Add the new clip to the beginning of the array
      const updatedClips = [newClip, ...existingClips];

      // 4. Save the updated array back to localStorage
      localStorage.setItem("codeClips", JSON.stringify(updatedClips));

      setSaveStatus("Clip saved successfully!");
      setClipTitle("");
      
      // 5. Close the modal after a short delay to show the success message
      setTimeout(() => {
        setIsShareModalOpen(false);
        setSaveStatus(null);
      }, 1500);

    } catch (error) {
      console.error("Failed to save clip:", error);
      setSaveStatus("Error: Could not save clip.");
    }
  };

  return (
    <div className={`h-full w-full relative rounded-xl overflow-hidden ring-1 ring-white/[0.05]`}>
      <section className="h-full w-full flex-1 flex flex-col bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-[fade-in-up_0.6s_ease-out_forwards]">
        <header className="w-full flex justify-between items-center p-4 bg-gray-900/60 border-b border-gray-700">
          <div className="flex items-center gap-4">
            {/* ... header content ... */}
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
              <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full"></div>
              <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
            </div>
            <h2 className="text-base font-semibold text-gray-300">
              Code Editor
            </h2>
          </div>
          <div className="relative group">
            {/* Attach onClick to the share button */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold pl-3 pr-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            >
              <IoShareSocial />
              <span>Share</span>
            </button>
          </div>
        </header>

        <div className="h-full w-full bg-gray-800 flex-1">
          <Editor
            // ... (Editor props remain the same)
            className={`w-full h-full border-none ${layoutMode ? "w-full max-w-4xl" : "h-full"}`}
            width={"1440px"}
            value={code}
            onChange={(value) => setCode(value || "")}
            language={language.toLowerCase()}
            theme="my-theme"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              cursorStyle: "block",
              wordWrap: "on",
              scrollbar: {
                vertical: "visible",
                horizontal: "visible",
              },
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              renderLineHighlight: "none",
              lineDecorationsWidth: 0,
              lineNumbersMinChars: 3,
              renderWhitespace: "none",
            }}
            onMount={(editor, monaco) => {
              monaco.editor.defineTheme("my-theme", {
                base: "hc-black",
                inherit: true,
                rules: [
                  {
                    token: "",
                    foreground: "FFFFFF",
                    background: "00000000",
                  },
                ],
                colors: {
                  "editor.background": "#00000000",
                  "editor.foreground": "#FFFFFF",
                  "editor.lineHighlightBackground": "#00000000",
                  "editorLineNumber.foreground": "#48576f",
                  "editorCursor.foreground": "#37b9f4",
                  "editorGutter.border": "#00000000",
                  "editor.lineHighlightBorder": "#00000000",
                  "editorWidget.border": "#00000000",
                },
              });

              monaco.editor.setTheme("my-theme");
            }}
          />
        </div>
      </section>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-[fade-in_0.3s_ease-out]">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-2">Share Code Clip</h3>
            <p className="text-sm text-gray-400 mb-4">
              Give your snippet a name. It will be saved locally in your browser.
            </p>
            <input
              type="text"
              value={clipTitle}
              onChange={(e) => setClipTitle(e.target.value)}
              placeholder="e.g., React Debounce Hook"
              className="w-full p-2.5 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              autoFocus
            />
            {saveStatus && (
              <p className={`text-sm mt-3 ${saveStatus.startsWith("Error") ? "text-red-400" : "text-green-400"}`}>
                {saveStatus}
              </p>
            )}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveClip}
                className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors"
              >
                Confirm & Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}