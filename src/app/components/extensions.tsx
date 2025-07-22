import React from "react";

// Import all the icons we'll need from different packs
import {
  FaPython,
  FaStripeS,
  FaHtml5,
  FaJava,
  FaPhp,
  FaMarkdown,
} from "react-icons/fa";
import { SiJupyter, SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { GoGitBranch } from "react-icons/go";
import { RiRobotLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeJson, BsFiletypeYml } from "react-icons/bs";

// Data for the "Code with extensions" section
const extensionData = [
  {
    name: "Python",
    description: "Adds rich language support for Python",
    icon: FaPython,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    name: "Stripe",
    description: "Build, test, and use Stripe inside your editor",
    icon: FaStripeS,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    name: "C/C++",
    description: "Adds rich language support for C/C++",
    icon: TbBrandCpp,
    color: "text-gray-600",
    bgColor: "bg-gray-200",
  },
  {
    name: "Jupyter",
    description: "Language support for Jupyter Notebooks",
    icon: SiJupyter,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    name: "GitLens",
    description: "Supercharge your Git experience",
    icon: GoGitBranch,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    name: "C# Dev Kit",
    description: "Powerful tools for your C# environment",
    icon: TbBrandCSharp,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    name: "MongoDB",
    description: "Extension for the MongoDB agent",
    icon: SiMongodb,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    name: "GitHub Copilot",
    description: "Streamline the process of developing for Azure",
    icon: RiRobotLine,
    color: "text-sky-600",
    bgColor: "bg-sky-100",
  },
];

// Data for the "Code in any language" section
const languageData = [
  { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: FaPython, color: "text-blue-500" },
  { name: "C++", icon: TbBrandCpp, color: "text-blue-700" },
  { name: "C#", icon: TbBrandCSharp, color: "text-green-600" },
  { name: "HTML", icon: FaHtml5, color: "text-red-500" },
  { name: "Java", icon: FaJava, color: "text-orange-500" },
  { name: "JSON", icon: BsFiletypeJson, color: "text-gray-700" },
  { name: "PHP", icon: FaPhp, color: "text-purple-600" },
  { name: "Markdown", icon: FaMarkdown, color: "text-blue-600" },
  { name: "YAML", icon: BsFiletypeYml, color: "text-red-500" },
];

export default function LanguageExtension() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        {/* Section 1: Code with extensions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10">
          <div className="md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Code with extensions
            </h2>
            <p className="mt-4 text-gray-400">
              Customize VS Code with AI-powered functionality from extensions
              and Model Context Protocol servers to use in Chat. Or,
              <span className="inline-block text-[#00BFFF] font-semibold hover:text-sky-400 transition-colors">
                build your own extension
              </span>
              to power your team’s unique scenarios.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {extensionData.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-gray-200 bg-gray-50/80 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center`}
                    >
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-600">
              View 75k+ extensions in the
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                Extension Marketplace
              </a>
            </p>
          </div>
        </div>

        {/* Section 2: Code in any language */}
        <div className="flex justify-between  gap-x-12 gap-y-10">
          <div className="md:pr-8 max-w-[448px]">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Code in any language{" "}
            </h2>
            <p className="mt-4 text-gray-400 ">
              VS Code supports almost every major programming language. Several
              ship in the box, like JavaScript, TypeScript, CSS, and HTML, but
              extensions for others can be found in the VS Code Marketplace.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
              {languageData.map((lang) => (
                <div key={lang.name} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50/80 p-4">
                  <lang.icon
                    className={`w-7 h-7 flex-shrink-0 ${lang.color}`}
                  />
                  <span className="font-medium text-gray-700">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
