import { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "https://jureursicphotography.com/wp-content/uploads/2020/10/2020_02_21_Sephora-Favurite-Box5247.jpg",
    "https://designsvalley.com/wp-content/uploads/2023/04/product-hunting-1024x576.jpg",
    "https://img.freepik.com/free-photo/spring-wardrobe-switch-flat-lay_23-2150264144.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723248000&semt=ais_hybrid",
    "https://ecommercephoto.co/wp-content/gallery/lifestyle-jewelry-product-photogrpahy/jewelry-product-photography-gallery-02.jpg",
    "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/600x400";
                console.error(`Image failed to load: ${image}`);
              }}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none z-10"
      >
        &#8249;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none z-10"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
