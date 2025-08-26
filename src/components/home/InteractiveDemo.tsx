"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";

// --- Data for Different Languages ---
const demos = {
  JavaScript: {
    code: `function greet(name) {\n  // Log a friendly greeting\n  console.log(\`Hello, \${name}!\`);\n}\n\ngreet('Developer');`,
    language: "javascript",
  },
  Python: {
    code: `def greet(name):\n  # Log a friendly greeting\n  print(f"Hello, {name}!")\n\ngreet('Developer')`,
    language: "python",
  },
  React: {
    code: `function Welcome({ name }) {\n  // Return a JSX element\n  return <h1>Hello, {name}!</h1>;\n}\n\n<Welcome name="Developer" />`,
    language: "jsx",
  },
  Vue: {
    code: `<template>\n  <h1>Hello, {{ name }}!</h1>\n</template>\n\n<script setup>\n  // Define component state\n  const name = 'Developer';\n</script>`,
    language: "html",
  },
};

type Language = keyof typeof demos;

// A more robust syntax highlighting function
const syntaxHighlight = (code: string) => {
  return code
    .replace(/(\/\/.*|\#.*)/g, '<span class="text-gray-400">$1</span>') // Comments
    .replace(/(const|function|return|def|import|export|setup)/g, '<span class="text-purple-400">$1</span>') // Keywords
    .replace(/(greet|Welcome|console|print|name)/g, '<span class="text-sky-300">$1</span>') // Functions/Variables
    .replace(/(log)/g, '<span class="text-yellow-300">$1</span>') // Methods
    .replace(/(<template>|<\/template>|<script>|<\/script>|<h1>|<\/h1>)/g, '<span class="text-gray-400">$1</span>') // HTML Tags
    .replace(/(\`Hello, \${name}!\`|'Developer'|"Hello, {name}!")/g, '<span class="text-green-300">$1</span>') // Strings
    .replace(/({|})/g, '<span class="text-yellow-300">$1</span>'); // Braces
};

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState<Language>("JavaScript");
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [typedCode, setTypedCode] = useState("");

  const activeDemo = demos[activeTab];

  useEffect(() => {
    setTypedCode("");
    let charIndex = 0;
    const targetCode = activeDemo.code;
    const intervalId = setInterval(() => {
      if (charIndex < targetCode.length) {
        setTypedCode((prev) => targetCode.substring(0, prev.length + 1));
        charIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 25);
    return () => clearInterval(intervalId);
  }, [activeTab, activeDemo.code]);

  const themeClasses = theme === 'dark'
    ? 'bg-slate-800/80 border-slate-700'
    : 'bg-white/80 border-slate-200';
  
  const codeLines = typedCode.split('\n');

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            See It In Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Experience the core features of EchoCode directly in your browser.
          </p>
        </div>

        {/* Editor Mockup Container */}
        <div className="mt-16 w-full max-w-4xl mx-auto group">
          <div className={`relative rounded-xl shadow-2xl border ${themeClasses} backdrop-blur-lg transform transition-all duration-500 group-hover:scale-[1.02]`}>
            {/* Header with Tabs and Theme Toggle */}
            <div className={`flex items-center justify-between p-3 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className={`flex items-center gap-1 p-1 rounded-lg ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                {(Object.keys(demos) as Language[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                      activeTab === tab
                        ? `${theme === 'dark' ? 'bg-slate-600' : 'bg-white'} text-slate-800 dark:text-white`
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                className={`p-2 rounded-full ${theme === 'dark' ? 'text-slate-400 hover:bg-slate-700' : 'text-slate-500 hover:bg-slate-100'} transition-colors`}
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
            </div>
            
            {/* Editor Area */}
            <div className="p-4 h-72 font-mono text-sm flex">
              {/* Line Numbers Gutter */}
              <div className="pr-4 text-right select-none opacity-50">
                {codeLines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              {/* Code with Blinking Cursor */}
              <pre className={theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}>
                {codeLines.map((line, i) => (
                  <div key={i}>
                    <span dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) }} />
                    {i === codeLines.length - 1 && (
                      <span className="inline-block w-2 h-4 bg-blue-500 -mb-0.5 ml-0.5 cursor-blink"></span>
                    )}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-slate-800">Ready to dive in?</h3>
            <Link
                href="/play-ground"
                className="mt-4 inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            >
                Try the Full Playground
            </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;