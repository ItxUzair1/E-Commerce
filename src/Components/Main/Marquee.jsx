import React from "react";
import Marquee from "react-fast-marquee";

function Marque() {
  const clothingBrands = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png", // Zara
    "https://static.toiimg.com/thumb/msid-106616095,width-400,resizemode-4/106616095.jpg", // Gucci
    "https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg", // H&M
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimi8twCTodEQs88YpzRQaDx__CIfABhSX7Q&s", // Uniqlo
    "https://static.vecteezy.com/system/resources/previews/012/560/876/original/nike-logo-on-transparent-background-free-vector.jpg", // Nike
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", // Adidas
  ];

  const techBrands = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", // Apple
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", // Samsung
    "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg", // Intel
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSAzqntiPa4s1ikzopYczT8q44qS2ncEoWg&s", // Nvidia
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl p-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-blue-900 mb-2">
          Discover Our Partners
        </h1>
        <p className="text-lg text-gray-500 mb-8 text-center">
          Shop from the world's leading clothing, tech, and jewelry brands.
        </p>

        {/* Clothing Brands Marquee */}
        <Marquee gradient={false} speed={40} className="overflow-hidden w-full mb-8">
          {clothingBrands.map((src, index) => (
            <div key={index} className="flex-shrink-0 p-5">
              <img
                src={src}
                alt="Clothing Brand"
                className="w-full h-auto max-w-[200px] aspect-[16/9] object-contain rounded-lg shadow-md"
              />
            </div>
          ))}
        </Marquee>

        {/* Tech Brands Marquee */}
        <Marquee gradient={false} speed={30} direction="right" className="overflow-hidden w-full mb-8">
          {techBrands.map((src, index) => (
            <div key={index} className="flex-shrink-0 p-5">
              <img
                src={src}
                alt="Tech Brand"
                className="w-full h-auto max-w-[200px] aspect-[16/9] object-contain rounded-lg shadow-md"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Marque;
