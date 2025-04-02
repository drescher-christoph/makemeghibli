import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="md:text-4xl sm:text-2xl text-3xl font-geffroy text-center text-primary mx-20 dark:text-white inline-block">
        Please wait a moment... Totoro is cooking!
      </h1>
      <img className="w-150 h-auto"
        src="https://giffiles.alphacoders.com/145/14561.gif"
        alt="Totoro-Meme"
      />
    </div>
  );
};

export default LoadingScreen;
