import Image from "next/image";

const EditorMockup = () => (
  <div className="my-16 w-full max-w-6xl mx-auto p-1.5 bg-gradient-to-b from-white/10 to-transparent rounded-2xl shadow-2xl shadow-black/40">
    <Image
      src={"/images/editor-mockup.png"}
      alt="editor-mockup"
      width={2000}
      height={1000}
    />
  </div>
);

export default EditorMockup;
