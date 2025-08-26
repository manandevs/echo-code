"use client";

import { useState, useEffect, useRef } from "react";
import { FiZap, FiAlertCircle } from "react-icons/fi";

const codeLines = [
  'const Welcome = () => {',
  '  return <h1 className="title">Hello, World!</h1>;',
  '};'
];

const codeWithError = '  return <h1 class="title">Hello, World!</h1>;';
const correctCode = '  return <h1 className="title">Hello, World!</h1>;';

const AnimatedEditorMockup = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentCode, setCurrentCode] = useState<string[]>(['']);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [showError, setShowError] = useState(false);

  // Use a ref to store timeouts to clear them effectively
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const timeouts = timeoutsRef.current;

    const typeLine = (lineIndex: number, charIndex: number = 0) => {
      if (lineIndex >= codeLines.length) {
        // End of sequence, switch theme and restart
        timeouts.push(setTimeout(() => {
          setTheme(prev => prev === 'dark' ? 'light' : 'dark');
          setCurrentCode(['']);
          // Reset showError before restarting to ensure fresh animation
          setShowError(false); 
          typeLine(0);
        }, 2500));
        return;
      }
      
      const targetLine = lineIndex === 1 && showError ? codeWithError : codeLines[lineIndex];

      if (charIndex < targetLine.length) {
        setCurrentCode(prev => {
          const newCode = [...prev];
          newCode[lineIndex] = targetLine.substring(0, charIndex + 1);
          if (!newCode[lineIndex + 1]) newCode[lineIndex + 1] = '';
          return newCode;
        });
        
        // Show autocomplete mid-way through typing className
        if (lineIndex === 1 && charIndex === 21) {
            setShowAutocomplete(true);
            timeouts.push(setTimeout(() => setShowAutocomplete(false), 1000));
        }

        timeouts.push(setTimeout(() => typeLine(lineIndex, charIndex + 1), 50));
      } else {
        // Line finished typing
        if (lineIndex === 1 && !showError) {
          // Introduce an error
          timeouts.push(setTimeout(() => {
            setShowError(true);
            setCurrentCode(prev => {
                const newCode = [...prev];
                newCode[1] = codeWithError;
                return newCode;
            });
            
            // "Fix" the error
            timeouts.push(setTimeout(() => {
                setShowError(false);
                setCurrentCode(prev => {
                    const newCode = [...prev];
                    newCode[1] = correctCode;
                    return newCode;
                });
                typeLine(lineIndex + 1); // Move to next line after fixing
            }, 1500));
          }, 1000));
        } else {
          typeLine(lineIndex + 1);
        }
      }
    };

    typeLine(0);

    return () => {
      timeouts.forEach(clearTimeout);
      timeoutsRef.current = []; // Clear the ref as well
    };
  }, [showError]); // Added showError to the dependency array

  const themeClasses = theme === 'dark' 
    ? 'bg-[#1e293b] border-gray-700 text-gray-300' 
    : 'bg-white border-gray-200 text-gray-800';

  const syntaxHighlight = (line: string) => {
    return line
      .replace(/(const|return)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(Welcome)/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(<h1|<\/h1>)/g, '<span class="text-red-400">$1</span>')
      .replace(/(className|class)/g, '<span class="text-cyan-300">$1</span>')
      .replace(/("title"|"Hello, World!")/g, '<span class="text-green-400">$1</span>');
  };

  return (
    <div className={`relative w-full max-w-2xl rounded-xl shadow-2xl p-4 border transition-colors duration-500 ${themeClasses}`}>
      {/* Window Controls */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
        <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full"></div>
        <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
      </div>
      
      {/* Code Area */}
      <div className={`relative ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'} h-64 rounded-md p-4 text-sm font-mono overflow-hidden transition-colors duration-500`}>
        <pre>
          {currentCode.map((line, i) => (
            <div key={i} className="relative">
              <span dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) }} />
              {i === 1 && showError && <div className="absolute bottom-0 left-20 w-10 border-b-2 border-red-500 animate-pulse"></div>}
            </div>
          ))}
        </pre>
        {/* Autocomplete Popup */}
        {showAutocomplete && (
          <div className={`absolute top-24 left-16 w-48 rounded-md shadow-lg p-2 border transition-colors duration-500 ${themeClasses}`}>
            <div className="flex items-center gap-2 p-2 bg-blue-500/10 rounded-md">
              <FiZap className="text-blue-500" />
              <span className="font-semibold text-blue-500">className</span>
            </div>
          </div>
        )}
      </div>
        {/* Floating Error Element */}
        {showError && (
            <div className={`absolute bottom-6 right-6 flex items-center gap-2 p-2 rounded-lg text-xs transition-colors duration-500 z-50 ${theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100 text-red-600'}`}>
                <FiAlertCircle />
                <span>Invalid prop `class`</span>
            </div>
        )}
    </div>
  );
};

export default AnimatedEditorMockup;