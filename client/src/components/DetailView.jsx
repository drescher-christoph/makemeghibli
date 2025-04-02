import React, { useState, useRef, useEffect } from "react";

const DetailView = ({ image, prompt = "", onReset }) => {
  const [promptHeight, setPromptHeight] = useState(60); // Standardhöhe
  const promptRef = useRef(null);

  useEffect(() => {
    if (promptRef.current) {
      setPromptHeight(promptRef.current.offsetHeight);
    }
  }, [prompt]);

  return (
    <>
      <div
        className="relative w-[512px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#f0e6d0] bg-[#f0e6d0]"
        style={{ minHeight: "512px" }} // Fixe Mindesthöhe
      >
        {/* Bild-Container (Flexible Höhe) */}
        <div className="relative flex-grow h-[512px] min-h-[512px]">
          <img src={image} className="w-full h-full object-contain" />
        </div>

        {/* Prompt-Balken (Flexible Höhe mit Scroll) */}
        <div className="bg-[#fde9b3] border-t-4 border-[#6fa43a] p-4 max-h-[200px] overflow-y-auto">
          <p className="text-[#3d5c1e] font-ghibli text-lg italic break-words">
            "{prompt}"
          </p>
        </div>
        <button
          onClick={onReset}
          className="absolute top-2 left-2 p-2 rounded-full bg-[#fde9b3]/80 hover:bg-[#fde9b3] transition-colors shadow-md"
        >
          ←
        </button>
      </div>
    </>
  );
};

export default DetailView;
