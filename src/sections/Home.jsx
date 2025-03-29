import React from "react";
import PromptMask from "../components/PromptMask";

const Home = () => {
  return (
    <div className="fixed bg-primary w-full h-full ml-20 z-0">
      <div className="flex flex-col items-center justify-center h-full mr-20">
        <div className="fixed top-15">
          <h2 className="font-geffroy text-primary text-center text-3xl">
            私をジブリにして
          </h2>
          <h3 className="font-geffroy text-primary text-center text-2xl">
            MAKEMEGHIBLI
          </h3>
        </div>
        <h1 className="animate-typing md:text-5xl sm:text-3xl text-4xl font-wonderful text-center text-primary mx-20 dark:text-white inline-block">
          Let’s Ghiblize Your World!
        </h1>

        <PromptMask />

        {/* <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFmbWxqMTJteTFpNXF1bnl5MmJqMXpmN3YxZ2dlM2Mwa3cwZHNsYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdHkYXGiemtvCMM/giphy.gif"
          alt="Totoro-Meme"
        /> */}
        {/* https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3p5Z2hkamx3bHpucmNya2Z2cXB6NGR3eDhjcWNpN3lpbDEyYnpnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b07clVdSOQcSY/giphy.gif */}
        <img
          className="fixed right-0 bottom-10 max-w-1/5"
          src="src/assets/totoro-side.png"
          alt="totoro"
        />
      </div>
    </div>
  );
};

export default Home;
