"use client";

import { useState } from 'react';
import { FaPlay, FaSync, FaCopy, FaDownload, FaExclamationTriangle, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { IoChevronForward } from "react-icons/io5";

type RightSidebarProps = {
  onRun: () => void;
  output: string;
  executionTime: string;
  memoryUsage: string;
  isLoading: boolean;
}

export default function RightSidebar({ onRun, output, executionTime, memoryUsage, isLoading }: RightSidebarProps) {
  const [isExecutionOpen, setExecutionOpen] = useState(true);
  const [isOutputOpen, setOutputOpen] = useState(true);

  return (
    <aside className="w-96 bg-[#f0f4f8] flex flex-col gap-2 rounded-lg overflow-y-auto text-gray-800 pl-1 pr-2">

      {/* Execution Panel */}
      <div>
        <button onClick={() => setExecutionOpen(!isExecutionOpen)} className="flex items-center gap-1 text-[17px] font-bold w-full">
          <IoChevronForward size={14} className={`transition-transform ${isExecutionOpen ? 'rotate-90' : ''}`} />
          <span>Execution</span>
        </button>
        {isExecutionOpen && (
          <div className="bg-white px-2 py-2.5 rounded-lg border border-gray-200 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Code Executor</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={onRun}
                  disabled={isLoading}
                  className={`p-2 text-white rounded-md transition-colors ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {isLoading ? <FaSync size={12} className="animate-spin" /> : <FaPlay size={12} />}
                </button>
                <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  <FaSync size={12} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2 text-center">
              <div className="bg-gray-100 p-1 rounded-md">
                <p className="text-[12px] text-gray-500">Execution Time</p>
                <p className="font-semibold text-sm">{isLoading ? '...' : executionTime}</p>
              </div>
              <div className="bg-gray-100 p-1 rounded-md">
                <p className="text-[12px] text-gray-500">Memory Usage</p>
                <p className="font-semibold text-sm">{isLoading ? '...' : memoryUsage}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 text-[12px] py-1.5 bg-gray-100 rounded-md hover:bg-gray-200"><FaCopy /> Copy Code</button>
              <button className="flex-1 flex items-center justify-center gap-2 text-[12px] py-1.5 bg-gray-100 rounded-md hover:bg-gray-200"><FaDownload /> Download</button>
            </div>
            <div className="mt-2 p-3 bg-gray-50 rounded-lg text-xs space-y-1.5">
              <h4 className="font-semibold mb-2">Language Support</h4>
              <p className="flex items-start gap-2"><FaCheckCircle className="pt-[3px] text-[15px] text-green-500" /> JS, Python, Java & more via Piston API.</p>
              <p className="flex items-start gap-2"><FaExclamationTriangle className="pt-[3px] text-[15px] text-yellow-500" /> HTML/CSS - Preview mode not available.</p>
              <p className="flex items-start gap-2"><FaTimesCircle className="pt-[3px] text-[15px] text-red-500" /> File I/O and network access are restricted.</p>
            </div>
          </div>
        )}
      </div>

      {/* Output Panel */}
      <div>
        <button onClick={() => setOutputOpen(!isOutputOpen)} className="flex items-center gap-1 text-[17px] font-bold w-full">
          <IoChevronForward size={14} className={`transition-transform ${isOutputOpen ? 'rotate-90' : ''}`} />
          <span>Output</span>
        </button>
        {isOutputOpen && (
          <div className="bg-white rounded-lg border border-gray-200 animate-fade-in overflow-hidden">
            <div className="flex items-center border-b border-gray-200">
              <button className="px-3 py-1 text-sm font-semibold border-b-2 border-blue-600 text-blue-600">Output</button>
              {/* <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-50">Problems</button> */}
            </div>
            <div className="p-3 pt-2 bg-gray-900 text-white font-mono text-xs leading-[1.1] h-48 overflow-y-auto whitespace-pre-wrap">
              {output}
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}

