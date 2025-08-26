"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaSave, FaDownload, FaCog, FaSync } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { languageConfig, LanguageKey, languages } from "@/data/paly-ground";
import Link from "next/link";

export interface NavbarProps {
  code: string;
  onRun: () => void;
  onChangeLanguage: (lang: string) => void;
  currentLanguage: string;
  isExecuting?: boolean;
  hasUnsavedChanges?: boolean;
  setHasUnsavedChanges: (value: boolean) => void;
}

const Navbar = ({
  code,
  onRun,
  onChangeLanguage,
  currentLanguage,
  isExecuting = false,
  hasUnsavedChanges = false,
  setHasUnsavedChanges,
}: NavbarProps) => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  const CurrentLangConfig = languageConfig[currentLanguage as LanguageKey] || languageConfig.javascript;

  const handleSave = () => {
    try {
      localStorage.setItem(`code_snippet_${Date.now()}`, JSON.stringify({ code, language: currentLanguage }));
      setHasUnsavedChanges(false);
      alert("Code saved successfully to local storage!");
    } catch (error) {
      console.error("Failed to save code:", error);
      alert("Error: Could not save code.");
    }
  };

  const handleDownload = () => {
    try {
      const blob = new Blob([code], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `snippet.${CurrentLangConfig.extension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download code:", error);
      alert("Error: Could not download file.");
    }
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-[#f0f4f8] text-gray-800 border-b border-gray-300">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <Image src={"/svg/logo.svg"} alt="logo" width={30} height={30} />
            <div className="flex space-x-1 text-3xl font-bold relative">
              <span className="text-red-200">e</span>
              <span className="text-orange-300">c</span>
              <span className="text-blue-200">h</span>
              <span className="text-red-300">o</span>
              <div className="bg-red-400 w-2 h-2 absolute right-0.5 top-0.5 rounded-full"></div>
            </div>
          </div>
        </Link>
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 rounded-md hover:bg-gray-100 w-36 justify-between"
          >
            <div className="flex items-center gap-2">
              <CurrentLangConfig.Icon className={CurrentLangConfig.color} />
              <span className="capitalize">{currentLanguage}</span>
            </div>
            <MdExpandMore />
          </button>
          {isLangOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              {languages.map((lang) => (
                <a
                  key={lang}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onChangeLanguage(lang);
                    setIsLangOpen(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 capitalize"
                >
                  {lang}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onRun}
          disabled={isExecuting}
          className={`flex items-center gap-2 px-4 py-1.5 font-semibold text-sm text-white rounded-md transition-colors justify-center ${isExecuting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {isExecuting ? <FaSync className="animate-spin" /> : <FaPlay size={12} />}
          <span>{isExecuting ? "Running..." : "Run Code"}</span>
        </button>
        <button
          onClick={handleSave}
          className="relative flex items-center gap-2 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100"
        >
          {hasUnsavedChanges && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full border-2 border-white"></span>
          )}
          <FaSave />
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100"
        >
          <FaDownload />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100">
          <FaCog />
        </button>
      </div>
    </header>
  );
};

export default Navbar;