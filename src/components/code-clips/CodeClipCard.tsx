"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Editor } from "@monaco-editor/react";
import { FiClipboard, FiCheck, FiPlayCircle } from "react-icons/fi";
import type { Clip } from "@/types"; // Corrected: Import the shared type from the central types folder

const CodeClipCard = ({ clip }: { clip: Clip }) => {
   const { title, language, code, author, avatarUrl } = clip;
   const [copied, setCopied] = useState(false);
   const router = useRouter();

   const handleCopy = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent the main div's onClick from firing
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   };

   const handleOpenInPlayground = () => {
      // Use localStorage to pass the code to the main playground page
      localStorage.setItem("code-to-load", JSON.stringify({ code, language }));
      router.push("/");
   };

   return (
      <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
         {/* Card Header */}
         <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 truncate">{title}</h3>
            <span className="text-xs font-mono mt-1 inline-block px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 capitalize">
               {language}
            </span>
         </div>

         {/* Code Preview with Overlay Button */}
         <div className="relative h-48 bg-[#1e293b] cursor-pointer" onClick={handleOpenInPlayground}>
            <button
               onClick={handleCopy}
               className="absolute top-2 right-2 z-10 flex items-center gap-2 px-2 py-1 bg-gray-700/60 hover:bg-gray-600 rounded-md text-xs text-gray-300 transition-all opacity-0 group-hover:opacity-100"
            >
               {copied ? <FiCheck className="text-green-400" /> : <FiClipboard />}
               {copied ? "Copied!" : "Copy"}
            </button>
            <Editor
               height="100%"
               language={language.toLowerCase()}
               value={code}
               theme="vs-dark"
               options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 13,
                  domReadOnly: true,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  wordWrap: "on",
                  lineNumbers: "off",
                  glyphMargin: false,
                  folding: false,
                  lineDecorationsWidth: 0,
                  renderLineHighlight: 'none',
               }}
            />
         </div>

         {/* Card Footer with Author and Primary Action */}
         <div className="p-3 bg-gray-50 flex justify-between items-center gap-2 rounded-b-lg">
            <div className="flex items-center gap-2">
               <Image
                  src={avatarUrl}
                  alt={author}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
               />
               <span className="text-xs text-gray-500">by {author}</span>
            </div>
            <button
               onClick={handleOpenInPlayground}
               className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-xs font-semibold transition-colors"
            >
               <FiPlayCircle />
               Open in Playground
            </button>
         </div>
      </div>
   );
};

export default CodeClipCard;