import React from "react";

const Generations = () => {
  const images = [
    {
      src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFmbWxqMTJteTFpNXF1bnl5MmJqMXpmN3YxZ2dlM2Mwa3cwZHNsYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdHkYXGiemtvCMM/giphy.gif",
      alt: "Totoro-Meme",
      prompt:
        "A cute and fluffy Totoro character from Studio Ghibli, surrounded by a magical forest with vibrant colors and whimsical elements.",
    },
    {
      src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3p5Z2hkamx3bHpucmNya2Z2cXB6NGR3eDhjcWNpN3lpbDEyYnpnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b07clVdSOQcSY/giphy.gif",
      alt: "Totoro-Meme",
      prompt:
        "A cute and fluffy Totoro character from Studio Ghibli, surrounded by a magical forest with vibrant colors and whimsical elements.",
    },
    {
      src: "src/assets/images/ghibli-example.jpeg",
      alt: "Totoro-Meme",
      prompt:
        "Michael Saylor in a orange Bitcoin T-Shirt standing at the beach",
    },
    {
      src: "src/assets/images/ghibli-example2.jpeg",
      alt: "Totoro-Meme",
      prompt:
        "Michael Saylor in a orange Bitcoin T-Shirt standing at the beach",
    },
    {
      src: "src/assets/images/ghibli-example3.jpeg",
      alt: "Totoro-Meme",
    },
    {
      src: "src/assets/images/ghibli-example4.jpeg",
      alt: "Totoro-Meme",
    },
    {
      src: "src/assets/images/ghibli-example5.jpeg",
      alt: "Totoro-Meme",
    },
    {
      src: "src/assets/images/ghibli-example6.jpeg",
      alt: "Totoro-Meme",
    },
    {
      src: "src/assets/images/ghibli-example7.jpeg",
      alt: "Totoro-Meme",
    },
    {
      src: "src/assets/images/ghibli-example8.jpeg",
      alt: "Totoro-Meme",
    },
    {
      src: "src/assets/images/ghibli-example9.jpeg",
      alt: "Totoro-Meme",
    },
    {
      src: "src/assets/images/ghibli-example10.jpeg",
      alt: "Totoro-Meme",
    },
  ];

  return (
    <div className="bg-primary w-full h-full ml-20 z-0 overflow-y-auto">
      <div className="flex flex-col items-center justify-start h-full mr-20 py-10">
        {/* Oberer Textbereich */}
        <div className="mb-10">
          <h2 className="font-geffroy text-primary text-center text-3xl">
            私をジブリにして
          </h2>
          <h3 className="font-geffroy text-primary text-center text-2xl">
            MAKEMEGHIBLI
          </h3>
        </div>

        {/* Bilder-Container */}
        <div className="w-[80%] grid grid-cols-5 gap-4 overflow-y-auto">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full h-auto rounded-lg shadow-lg"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Generations;
