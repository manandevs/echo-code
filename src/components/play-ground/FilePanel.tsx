"use client";

import { useState } from 'react';
import { IoChevronForward, IoSearchOutline } from 'react-icons/io5';
import { VscCollapseAll, VscNewFile, VscNewFolder, VscRefresh, VscSettingsGear } from 'react-icons/vsc';
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { SiJavascript } from "react-icons/si";
import { VscMarkdown } from "react-icons/vsc";

// Define a type for the file tree structure
type FileTreeContent = {
  [key: string]: string | FileTreeContent;
};

const files: FileTreeContent = {
  'src': {
    'main.js': 'js',
    'utils.js': 'js',
  },
  'styles': {
    'main.css': 'css',
  },
  'README.md': 'md',
};

const FileIcon = ({ type }: { type: string }) => {
  if (type === 'js') return <SiJavascript className="text-yellow-400" size={14} />;
  if (type === 'md') return <VscMarkdown className="text-blue-400" size={16} />;
  // Add other icons as needed
  return <div className="w-4 h-4 bg-gray-500" />;
};


const FileTree = ({ data, level = 0 }: { data: FileTreeContent; level?: number }) => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    'src': true, // Default open
    'styles': false,
  });

  const toggleFolder = (folder: string) => {
    setOpenFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  return (
    <div className="text-sm">
      {Object.entries(data).map(([name, content]) => {
        const isFolder = typeof content === 'object' && content !== null;
        const isOpen = openFolders[name];
        const paddingLeft = `${level * 16}px`;

        if (isFolder) {
          return (
            <div key={name}>
              <div
                onClick={() => toggleFolder(name)}
                className="flex items-center justify-between gap-1.5 px-2 py-[1px] cursor-pointer"
                style={{ paddingLeft }}
              >
                <div className="flex items-center space-x-1">
                  {isOpen ? <FcOpenedFolder size={16} /> : <FcFolder size={16} />}
                  <span className="text-gray-200">{name}</span>
                </div>
                <span className="text-gray-200">
                  <IoChevronForward className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                </span>
              </div>
              {isOpen && <FileTree data={content as FileTreeContent} level={level + 1} />}
            </div>
          );
        }

        return (
          <div
            key={name}
            className="flex items-center gap-2 my-1"
            style={{ paddingLeft: `${(level * 16) + 20}px` }}
          >
            <FileIcon type={content as string} />
            <span className="text-gray-100">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default function FilePanel() {
  return (
    <aside className="w-64 bg-[#1c2b3a] px-2 py-1.5 flex flex-col rounded-lg shadow-lg ring-1 ring-white/10 group">
      <div className="flex justify-between items-center border-b border-gray-500 mb-1.5 text-gray-300 group">
        <h2 className="text-md mb-0.5">
          Files
        </h2>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 group-hover:opacity-100 opacity-0 transition-opacity duration-100">
            <button>
              <VscNewFile size={15} />
            </button>
            <button>
              <VscNewFolder size={15} />
            </button>
            <button>
              <VscRefresh size={15} />
            </button>
            <button>
              <VscCollapseAll size={15} />
            </button>
          </div>
          <button>
            <VscSettingsGear size={15} />
          </button>
        </div>
      </div>
      <div className="relative mb-1.5">
        <IoSearchOutline className="absolute top-1/2 left-1.5 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search files..." className="w-full bg-[#131c25] border border-gray-600 rounded-lg pl-6 py-1 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
      </div>

      <div className="flex-1 overflow-y-auto">
        <FileTree data={files} />
      </div>
    </aside>
  );
}