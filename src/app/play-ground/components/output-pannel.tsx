"use client";

import { Editor } from "@monaco-editor/react";
import React from "react";
import { BsTerminal } from "react-icons/bs";

type OutputPanelProps = {
  output: string;
  layoutMode: boolean; 
};

export default function OutputPanel({ output, layoutMode }: OutputPanelProps) {
  return (
    <section className={`h-full flex flex-col bg-slate-100 rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp ${layoutMode ? "w-96": "w-full"}`}>
      {/* Header */}
      <header className="flex justify-between items-center py-5 px-4 sm:px-5 bg-slate-200/80 border-b border-slate-300">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
          <BsTerminal size={18} />
          <span>Live Terminal</span>
        </h2>
        <div
          className="flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full"
          role="status"
          aria-label="Terminal is connected"
        >
          <div className="h-2.5 w-2.5 bg-teal-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold">Connected</span>
        </div>
      </header>

      {/* Terminal Body */}
      <div className="flex-1 z-0 bg-slate-900 text-sm font-mono overflow-y-auto">
        <Editor
          className="w-full h-full"
          value={output}
          language="plaintext"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            lineNumbers: "on",
            renderLineHighlight: "none",
            scrollBeyondLastLine: false,
            renderWhitespace: "none",
          }}
          onMount={(editor, monaco) => {
            monaco.editor.defineTheme("my-theme", {
              base: "hc-black",
              inherit: true,
              rules: [],
              colors: {
                "editor.background": "#0f172a",
                "editor.foreground": "#f8fafc",
                "editorLineNumber.foreground": "#64748b",
              },
            });
            monaco.editor.setTheme("my-theme");
          }}
        />
      </div>
    </section>
  );
}