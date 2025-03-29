import React from "react";
import { FaArrowUp } from "react-icons/fa";

const PromptMask = () => {
  return (
    <div className="flex flex-col justify-between shadow-lg p-4 mt-10 w-[60%] h-[176px] rounded-[20px] bg-[#fde9b3] border border-[#6fa43a]">
      <textarea
        placeholder="What do you want to create?"
        className="w-full h-[80px] bg-transparent text-[#4A3628] text-2xl font-serif focus:outline-none resize-none overflow-y-auto"
      ></textarea>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="w-12 h-12 flex items-center justify-center border border-[#D4B98A] rounded-lg text-[#D4B98A] text-3xl">
            +
          </button>
          <button className="w-12 h-12 flex items-center justify-center border border-[#D4B98A] rounded-lg text-[#D4B98A] text-2xl">
            ⚙
          </button>
        </div>

        <button className="flex items-center justify-around w-12 h-12 bg-[#D77F2B] rounded-lg">
            <FaArrowUp size={23} className="text-gray-50" />
        </button>
      </div>
    </div>
  );
};

export default PromptMask;
