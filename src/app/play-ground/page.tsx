"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRunCode } from "@/hooks/useRunCode";
import Navbar from "./components/navbar";
import EditorPanel from "./components/editor-pannel";
import OutputPanel from "./components/output-pannel";

export default function PlayGroundPage() {
  const [language, setLanguage] = useState("javascript");
  const [outputLog, setOutputLog] = useState("");
  // layoutMode: true = row (side-by-side), false = column (stacked)
  const [layoutMode, setLayoutMode] = useState(true);

  const { runCode, getDefaultCode } = useRunCode();
  const [code, setCode] = useState(getDefaultCode(language));

  useEffect(() => {
    setCode(getDefaultCode(language));
    setOutputLog("");
  }, [language, getDefaultCode]);

  const handleRun = () => {
    setOutputLog("");
    runCode(code, language, (newOutput) =>
      setOutputLog((prev) => prev + newOutput)
    );
  };

  // Toggles the layout mode state
  const handleToggleLayout = () => {
    setLayoutMode((prevMode) => !prevMode);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white pb-14">
      {/* --- Background Decorative Glows --- */}
      <div className="absolute left-10 bottom-10 h-96 w-96 rounded-full bg-cyan-400 opacity-20 blur-3xl"></div>
      <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-yellow-400 opacity-10 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink-500 opacity-30 blur-3xl"></div>

      <div className="sticky top-0 z-10 w-full">
        <div className="mx-auto max-w-[1440px] px-5 py-2">
          <Navbar
            onRun={handleRun}
            onChangeLanguage={setLanguage}
            currentLanguage={language}
            onToggleLayout={handleToggleLayout}
          />
        </div>
      </div>

      {/* Main content area for editor and output panels */}
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-center gap-4 px-5 py-4 ${
          layoutMode ? "flex-col md:flex-row h-[650px]" : "flex-col h-[950px]"
        }`}
      >
        {/* Editor Panel container */}
        <div
          className={`flex w-full ${
            layoutMode ? "md:flex-[1] h-full w-full max-w-4xl" : "flex-1 h-full"
          }`}
        >
          <EditorPanel
            code={code}
            setCode={setCode}
            language={language}
            layoutMode={layoutMode}
          />
        </div>
        {/* Output Panel container */}
        <div
          className={`flex w-full ${
            layoutMode ? "md:flex-[1] h-full" : "flex-1 min-h-0 max-h-72"
          }`}
        >
          <OutputPanel output={outputLog} layoutMode={layoutMode} />
        </div>
      </div>
    </div>
  );
}
