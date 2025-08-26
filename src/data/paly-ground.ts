//data/paly-ground.ts
import { BsFiletypeJava } from "react-icons/bs";
import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";

// A map to associate languages with their icons and file extensions
export const languageConfig = {
  javascript: { 
    Icon: SiJavascript, 
    color: "text-yellow-500", 
    extension: "js",
    defaultCode: `// Welcome to the JavaScript Playground!\nconsole.log("Hello, World!");`
  },
  python: { 
    Icon: SiPython, 
    color: "text-blue-500", 
    extension: "py",
    defaultCode: `# Welcome to the Python Playground!\nprint("Hello, World!")`
  },
  typescript: { 
    Icon: SiTypescript, 
    color: "text-blue-400", 
    extension: "ts",
    defaultCode: `// Welcome to the TypeScript Playground!\nconst message: string = "Hello, World!";\nconsole.log(message);`
  },
  java: { 
    Icon: BsFiletypeJava, 
    color: "text-red-500", 
    extension: "java",
    defaultCode: `// Welcome to the Java Playground!\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`
  },
};

export type LanguageKey = keyof typeof languageConfig;
export const languages = Object.keys(languageConfig);