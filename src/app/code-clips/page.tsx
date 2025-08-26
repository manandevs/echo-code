"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ClipsNavbar from "@/components/code-clips/ClipsNavbar";
import CodeClipCard from "@/components/code-clips/CodeClipCard";
import { defaultClips } from "@/data/defaultClips"; // Correctly import the data
import type { Clip } from "@/types"; // Correctly import the shared type
import CreativeHeader from "@/components/code-clips/CreativeHeader";

const CodeClipsPage = () => {
  // State is correctly named to hold only the clips saved by the user.
  const [userClips, setUserClips] = useState<Clip[]>([]);

  // Load user-saved clips from localStorage when the component mounts
  useEffect(() => {
    try {
      const savedClipsRaw = localStorage.getItem("codeClips");
      if (savedClipsRaw) {
        setUserClips(JSON.parse(savedClipsRaw));
      }
    } catch (error) {
      console.error("Could not parse clips from localStorage", error);
      setUserClips([]); // Fallback to an empty array on error
    }
  }, []);

  return (
    <div className="bg-[#f0f4f8] text-gray-800 min-h-screen font-sans">
      <ClipsNavbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <CreativeHeader />

        <div className="space-y-12">
          <section>
            {userClips.length > 0 ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-300 pb-2 mb-6">
                  Your Saved Clips
                </h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {userClips.map((clip) => <CodeClipCard key={clip.id} clip={clip} />)}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-700">No Clips Found</h3>
                <p className="mt-2 text-gray-500">
                  Go to the <Link href="/" className="text-blue-500 hover:underline font-medium">Playground</Link> to save your first one!
                </p>
              </div>
            )}
          </section>

          {/* Section for Default Examples - always renders */}
          <section>
            <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-300 pb-2 mb-6">
              Supported by developers, for exploration without limits.            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {defaultClips.map((clip) => <CodeClipCard key={clip.id} clip={clip} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CodeClipsPage;