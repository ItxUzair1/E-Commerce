import React from "react";
import Carousel from "../C"; // Adjust if necessary
import ManImage from "../../assets/Man.jpg";
import WomanImage from "../../assets/Woman.jpg";
import JewelryImage from "../../assets/Jewelary.jpg";
import ElectronicsImage from "../../assets/Electronics.jpg";

const slides = [
    {
        title: "Elevate Your Style",
        imageSrc: ManImage,
        description: 'Discover the latest trends in men\'s fashion. From casual to formal, we have everything you need to look your best.',
        value: "men's clothing"
    },
    {
        title: "Unleash Your Elegance",
        imageSrc: WomanImage,
        description: 'Explore our exclusive women\'s collection. Find stunning outfits that complement your unique style and personality.',
        value: "women's clothing"
    },
    {
        title: "Adorn Yourself with Luxury",
        imageSrc: JewelryImage,
        description: 'Indulge in our exquisite range of jewelry. From timeless classics to modern designs, find pieces that make a statement.',
        value: "jewelery"
    },
    {
        title: "Tech Up Your Life",
        imageSrc: ElectronicsImage,
        description: 'Discover cutting-edge electronics that bring convenience and innovation to your life. Shop the latest gadgets today!',
        value: "electronics"
    }
];

function App() {
    return (
        <Carousel slides={slides}/>
    );
}

export default App;
