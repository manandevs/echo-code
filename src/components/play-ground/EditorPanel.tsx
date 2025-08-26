"use client";

import { Editor } from "@monaco-editor/react";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { VscSplitHorizontal } from "react-icons/vsc";
import { languageConfig, LanguageKey } from "@/data/paly-ground";


type EditorPanelProps = {
  code: string;
  setCode: (val: string) => void;
  language: string;
};

export default function EditorPanel({ code, setCode, language }: EditorPanelProps) {
  const lineCount = code.split('\n').length;
  const charCount = code.length;

  const LangConfig = languageConfig[language as LanguageKey] || languageConfig.javascript;
  const { Icon, color, extension } = LangConfig;

  return (
    <div className="h-full w-full flex flex-col bg-[#1e293b] rounded-md overflow-hidden ring-1 ring-slate-700">
      <div className="flex justify-between items-center bg-[#283549] border-b border-slate-700">
        <div className="flex items-center">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-[#1e293b] border-r border-slate-700">
            <Icon className={color} />
            <span className="text-sm text-gray-200 font-medium">main.{extension}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 px-4">
          <IoSearch className="text-gray-400 cursor-pointer hover:text-white" />
          <VscSplitHorizontal className="text-gray-400 cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="flex-1 w-full h-full">
        <Editor
          value={code}
          onChange={(value) => setCode(value || "")}
          language={language.toLowerCase()}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            glyphMargin: false,
            folding: false,
            lineDecorationsWidth: 10,
            lineNumbersMinChars: 3,
            renderLineHighlight: 'none',
            cursorStyle: 'line',
            padding: { top: 10 }
          }}
        />
      </div>

      <div className="flex items-center justify-between px-4 py-1 bg-[#283549] text-xs text-gray-400 border-t border-slate-700">
        <div className="flex items-center gap-4">
          <span>UTF-8</span>
          <span>LF</span>
          <span className="capitalize">{language}</span>
          <span>Lines: {lineCount}</span>
          <span>Characters: {charCount}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Ready</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}