import React, { useState } from "react";
import PromptMask from "../components/PromptMask";
import LoadingScreen from "../components/LoadingScreen";
import DetailView from "../components/DetailView";

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleReset = () => {
    setImage(""); // Setzt den Images-State zurück
    setPrompt("");
  };

  async function generateImage(prompt) {
    try {
      setPrompt(prompt);
      setIsLoading(true);
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt, 
          model: "dall-e-3",
          size: "1024x1024"
        }),
      });
  
      const data = await response.json();
  
      if (!data.success) {
        throw new Error(data.error);
      }
  
      console.log("Generiertes Bild", data.images[0].url);
      setImage(data.images[0].url);
      
    } catch (error) {
      console.error("Fehler:", error.message);
      // Fehlerbehandlung für den Nutzer
    } finally {
      setIsLoading(false);
    }
  }

  function handleOnGenerate(prompt) {
    console.log("Generating image...");
    generateImage(prompt);
  }

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

        {isLoading ? (<LoadingScreen />) : image != "" ? (<DetailView image={image} prompt={prompt} onReset={handleReset} />) : (<PromptMask onGenerate={handleOnGenerate} />) }
        
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
