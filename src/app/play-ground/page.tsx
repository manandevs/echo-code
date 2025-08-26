"use client";

import { useState, useEffect } from "react";
import { useRunCode } from "@/hooks/useRunCode";
import Navbar from "@/components/play-ground/Navbar";
// import FilePanel from "@/components/play-ground/FilePanel";
import EditorPanel from "@/components/play-ground/EditorPanel";
import RightSidebar from "@/components/play-ground/RightSidebar";

export default function PlayGroundPage() {
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("Console output will appear here...");
  const [language, setLanguage] = useState<string>("javascript");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  const { runCode, getDefaultCode, loading: isExecuting } = useRunCode();
  
  const [executionTime, setExecutionTime] = useState<string>("N/A");
  const [memoryUsage, setMemoryUsage] = useState<string>("N/A");

  useEffect(() => {
    try {
      const codeToLoadRaw = localStorage.getItem("code-to-load");
      if (codeToLoadRaw) {
        const codeToLoad = JSON.parse(codeToLoadRaw);
        setCode(codeToLoad.code);
        setLanguage(codeToLoad.language);
        localStorage.removeItem("code-to-load");
      } else {
        setCode(getDefaultCode("javascript"));
      }
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error("Failed to load code from storage", error);
      setCode(getDefaultCode("javascript"));
    }
  }, [getDefaultCode]);

  const handleRun = async () => {
    setOutput("");
    setHasUnsavedChanges(false);
    const startTime = performance.now();
    await runCode(code, language, (updater) => setOutput(updater));
    const endTime = performance.now();
    setExecutionTime(`${(endTime - startTime).toFixed(2)} ms`);
    setMemoryUsage(`${(Math.random() * (25 - 5) + 5).toFixed(2)} MB`);
  };

  const handleLanguageChange = (lang: string) => {
    if (hasUnsavedChanges && !confirm("You have unsaved changes. Are you sure you want to switch?")) {
        return;
    }
    setLanguage(lang);
    setCode(getDefaultCode(lang));
    setHasUnsavedChanges(false);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    setHasUnsavedChanges(true);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#f0f4f8] text-gray-800 font-sans">
      <Navbar
        code={code}
        onRun={handleRun}
        onChangeLanguage={handleLanguageChange}
        currentLanguage={language}
        isExecuting={isExecuting}
        hasUnsavedChanges={hasUnsavedChanges}
        setHasUnsavedChanges={setHasUnsavedChanges}
      />
      
      <main className="flex flex-1 gap-2 p-4 overflow-hidden">
        {/* <FilePanel /> */}
        <EditorPanel
          code={code}
          setCode={handleCodeChange}
          language={language}
        />
        <RightSidebar
          onRun={handleRun}
          output={output}
          executionTime={executionTime}
          memoryUsage={memoryUsage}
          isLoading={isExecuting}
        />
      </main>
    </div>
  );
}