import type { Clip } from "@/types"; // Import the shared type

// A static list of examples that will always be shown.
// Using negative IDs to prevent any potential key collision with user-saved clips.
export const defaultClips: Clip[] = [
  {
    id: -1,
    title: "Hello World in JavaScript",
    language: "javascript",
    author: "EchoCode Bot",
    avatarUrl: "https://i.pravatar.cc/150?u=echocode_bot",
    code: `console.log("Hello, World!");`,
  },
  {
    id: -2,
    title: "Hello World in Python",
    language: "python",
    author: "EchoCode Bot",
    avatarUrl: "https://i.pravatar.cc/150?u=echocode_bot",
    code: `print("Hello, World!")`,
  },
  {
    id: -3,
    title: "Hello World in Java",
    language: "java",
    author: "EchoCode Bot",
    avatarUrl: "https://i.pravatar.cc/150?u=echocode_bot",
    code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
  },
  {
    id: -4,
    title: "Hello World in C++",
    language: "c++",
    author: "EchoCode Bot",
    avatarUrl: "https://i.pravatar.cc/150?u=echocode_bot",
    code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}`,
  },
  {
    id: -5,
    title: "Hello World in Rust",
    language: "rust",
    author: "EchoCode Bot",
    avatarUrl: "https://i.pravatar.cc/150?u=echocode_bot",
    code: `fn main() {\n    println!("Hello, World!");\n}`,
  },
  {
    id: -6,
    title: "Hello World in Go",
    language: "go",
    author: "EchoCode Bot",
    avatarUrl: "https://i.pravatar.cc/150?u=echocode_bot",
    code: `package main\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`,
  },
];