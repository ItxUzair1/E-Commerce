import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './LandingPage'; // Reuse the LandingPage component

const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to move to the next slide
    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Function to move to the previous slide
    const handlePrevious = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Use useEffect to set up an interval for automatic slide change
    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentSlide]);

    return (
        <div className="relative overflow-hidden w-full h-screen">
            {/* Carousel content */}
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="absolute w-full h-full"
                >
                    <LandingPage
                        imageSrc={slides[currentSlide].imageSrc}
                        description={slides[currentSlide].description}
                        title={slides[currentSlide].title}
                        value={slides[currentSlide].value}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 rounded-full p-2"
            >
                &larr;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 rounded-full p-2"
            >
                &rarr;
            </button>
        </div>
    );
};

export default Carousel;
