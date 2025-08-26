import { useCallback, useState } from "react";
import { languageConfig } from "@/data/paly-ground";

export function useRunCode() {
  const [loading, setLoading] = useState(false);

  const runCode = async (
    code: string,
    language: string,
    setOutput: (updater: (prevOutput: string) => string) => void // Renamed `prev` to `prevOutput`
  ) => {
    setLoading(true);
    setOutput(() => `> Running ${language} code...\n`); // Using `prevOutput`

    const lang = language.toLowerCase();
    const config = languageConfig[lang as keyof typeof languageConfig];
    const ext = config ? config.extension : 'txt';

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: lang,
          version: "*",
          files: [{ name: `main.${ext}`, content: code }],
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const result = await response.json();
      
      let executionOutput = "";
      if (result.run.stdout) {
        executionOutput += result.run.stdout;
      }
      if (result.run.stderr) {
        executionOutput += `\n[ERROR] ${result.run.stderr}`;
      }
      
      setOutput(prevOutput => prevOutput + (executionOutput || "Execution finished with no output.") + "\n");

    } catch (err) {
      if (err instanceof Error) {
        setOutput(prevOutput => prevOutput + `\n[CLIENT_ERROR] ${err.message}\n`);
      } else {
        setOutput(prevOutput => prevOutput + `\n[CLIENT_ERROR] An unknown error occurred.\n`);
      }
    }

    setLoading(false);
  };

  const getDefaultCode = useCallback((language: string): string => {
    const langKey = language.toLowerCase() as keyof typeof languageConfig;
    return languageConfig[langKey]?.defaultCode || `// ${language} code goes here...`;
  }, []);

  return { runCode, getDefaultCode, loading };
}