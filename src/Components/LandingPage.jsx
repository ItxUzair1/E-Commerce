import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = ({ imageSrc, description,title,value }) => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-cover bg-center h-screen p-6 md:p-12"
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            <motion.div
                className="w-full max-w-2xl bg-white bg-opacity-70 rounded-lg p-8 md:p-12 text-center shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-600 mb-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                >
                    {description}
                </motion.p>
                <motion.button
                    className="px-8 py-3 text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link to={`/category/${value}`}>Shop Now</Link>
                </motion.button>
            </motion.div>
        </div>
    );
};

export default LandingPage;
