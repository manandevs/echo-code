import { useCallback, useState } from "react";

const languageExtensions: Record<string, string> = {
  javascript: "js",
  python: "py",
  java: "java",
  c: "c",
  "c++": "cpp",
  "c#": "cs",
  go: "go",
  rust: "rs",
  typescript: "ts",
  ruby: "rb",
  php: "php",
  swift: "swift",
  kotlin: "kt",
  perl: "pl",
  lua: "lua",
  scala: "scala",
};

const defaultCodeMap: Record<string, string> = {
  javascript: `console.log("Hello from JavaScript!");`,
  python: `print("Hello from Python!")`,
  java: `
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}`.trim(),
  c: `
#include <stdio.h>

int main() {
    printf("Hello from C!\\n");
    return 0;
}`.trim(),
  "c++": `
#include <iostream>
using namespace std;

int main() {
    cout << "Hello from C++!" << endl;
    return 0;
}`.trim(),
  "c#": `
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello from C#!");
    }
}`.trim(),
  go: `
package main
import "fmt"

func main() {
    fmt.Println("Hello from Go!")
}`.trim(),
  rust: `
fn main() {
    println!("Hello from Rust!");
}`.trim(),
  typescript: `console.log("Hello from TypeScript!");`,
  ruby: `puts "Hello from Ruby!"`,
  php: `<?php echo "Hello from PHP!"; ?>`,
  swift: `print("Hello from Swift!")`,
  kotlin: `
fun main() {
    println("Hello from Kotlin!")
}`.trim(),
  perl: `print "Hello from Perl!\\n";`,
  lua: `print("Hello from Lua!")`,
  scala: `
object Main extends App {
  println("Hello from Scala!")
}`.trim(),
};

export function useRunCode() {
  const [loading, setLoading] = useState(false);

  const runCode = async (
    code: string,
    language: string,
    appendOutput: (output: string) => void
  ) => {
    setLoading(true);
    appendOutput(`\n[INFO] Running ${language} code...\n`);

    const ext = languageExtensions[language.toLowerCase()] || "txt";

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          version: "*",
          files: [{ name: `main.${ext}`, content: code }],
        }),
      });

      const result = await response.json();
      appendOutput(result.run?.stderr || result.run?.stdout || "[INFO] No output.");
    } catch (err) {
      if (err instanceof Error) {
        appendOutput(`[ERROR] ${err.message}`);
      } else {
        appendOutput("[ERROR] Unknown error occurred.");
      }
    }

    setLoading(false);
  };

  const getDefaultCode = useCallback((language: string): string => {
    return defaultCodeMap[language.toLowerCase()] || "// Start coding...";
  }, []);

  return { runCode, getDefaultCode, loading };
}
