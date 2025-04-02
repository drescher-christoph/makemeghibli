import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const PromptMask = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState("");

  return (
    <>
      <h1 className="animate-typing md:text-5xl sm:text-3xl text-4xl font-wonderful text-center text-primary mx-20 dark:text-white inline-block">
        Let’s Ghiblize Your World!
      </h1>
      <div className="flex flex-col justify-between shadow-lg p-4 mt-10 w-[60%] h-[176px] rounded-[20px] bg-[#fde9b3] border border-[#6fa43a]">
        <textarea
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          placeholder="What do you want to create?"
          className="w-full h-[80px] bg-transparent text-[#4A3628] text-2xl font-serif focus:outline-none resize-none overflow-y-auto"
        ></textarea>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="w-12 h-12 flex items-center justify-center border border-[#D4B98A] hover:bg-[#D77F2B] rounded-lg text-[#D4B98A] hover:text-white text-3xl">
              <FaPlus size={20} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-[#D4B98A] hover:bg-[#D77F2B] rounded-lg text-[#D4B98A] hover:text-white text-2xl">
              <BsGear />
            </button>
          </div>

          <button
            onClick={() => onGenerate(prompt)}
            className="flex items-center justify-around w-12 h-12 bg-[#D77F2B] hover:bg-[#604833] rounded-lg"
          >
            <FaArrowUp size={20} className="text-gray-50" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PromptMask;
