import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
    const [data, setData] = useState(null);
    const images = [
        "https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM=",
        "https://www.fairtrade.org.uk/wp-content/uploads/2020/02/Ethical-and-Sustainable-jewellery-banner-Update-Oct-2021.jpg",
        "https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=",
        "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=",
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                alert("Error");
            }
        };
        fetchData();
    }, []);
    

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data && data.map((value, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img src={images[index]} alt={value} className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h1 className="text-xl font-bold text-gray-800 mb-2 text-center">
                                {value.toUpperCase()}
                            </h1>
                            <Link to={`/category/${value}`} className="text-blue-600">Shop Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
