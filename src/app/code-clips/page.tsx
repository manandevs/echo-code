"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClipboard, FiCheck, FiShare2 } from "react-icons/fi";
import Navbar from "./components/navbar";

// You'll need to install this library: `npm install react-syntax-highlighter`
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// --- Type Definition ---
type Clip = {
  id: number;
  title: string;
  language: string;
  author: string;
  avatarUrl: string;
  code: string;
};

// --- Reusable Code Snippet Card Component ---
const CodeClipCard = ({ clip }: { clip: Clip }) => {
  const { title, language, code, author, avatarUrl } = clip;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col bg-gray-900/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
      <div className="p-4">
        <span className="text-xs font-mono px-2 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-400">
          {language}
        </span>
        <h3 className="mt-3 text-lg font-bold text-gray-100">{title}</h3>
      </div>
      <div className="relative mt-2 flex-grow bg-[#1e1e1e] rounded-b-lg overflow-hidden">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 z-10 flex items-center gap-2 px-2 py-1 bg-gray-700/60 hover:bg-gray-600/80 rounded-md text-xs text-gray-300 transition-colors"
        >
          {copied ? <FiCheck className="text-green-400" /> : <FiClipboard />}
          {copied ? "Copied!" : "Copy"}
        </button>
        {/* Corrected: Use SyntaxHighlighter component */}
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={vscDarkPlus}
          customStyle={{
            background: "transparent",
            padding: "1rem 1rem 1.5rem 1rem",
            margin: 0,
            fontSize: "0.875rem",
            height: "100%",
            minHeight: "160px",
            overflow: "auto",
          }}
          codeTagProps={{
            style: { fontFamily: '"Fira Code", monospace' },
          }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="border-t border-gray-700/50 p-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Image
            src={avatarUrl}
            alt={author}
            width={30}
            height={30}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-gray-400">by @{author}</span>
        </div>
        <Link href="#" className="font-semibold text-cyan-400 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const CodeClipsPage = () => {
  const [clips, setClips] = useState<Clip[]>([]);

  // useEffect to load clips from localStorage on component mount
  useEffect(() => {
    try {
      const savedClipsRaw = localStorage.getItem("codeClips");
      if (savedClipsRaw) {
        setClips(JSON.parse(savedClipsRaw));
      }
    } catch (error) {
      console.error("Could not parse clips from localStorage", error);
      setClips([]); // Fallback to an empty array on error
    }
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <Navbar />

      <main className="max-w-7xl mx-auto mt-28">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
            Explore CodeClips
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            A curated collection of code snippets. Copy, learn, and share.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <FiShare2 />
            Share Your Own Code
          </Link>
        </header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {clips.length > 0 ? (
            clips.map((clip) => <CodeClipCard key={clip.id} clip={clip} />)
          ) : (
            <div className="col-span-full text-center py-16 bg-gray-900/30 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-300">No Clips Found</h3>
              <p className="mt-2 text-gray-500">
                Go to the <Link href="/" className="text-cyan-400 hover:underline">editor</Link> to share your first one!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CodeClipsPage;