import { useContext } from "react";
import { SearchContext } from "./Context/SearchContext";
import SearchProduct from "./SearchProduct";

export default function AboutUs() {
  const { isSearching } = useContext(SearchContext);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 p-6">
      {/* Display search results if searching */}
      {isSearching ? (
        <SearchProduct />
      ) : (
        <>
          {/* Hero Section with Image */}
          <div className="w-full max-w-4xl mb-12">
            <img
              src="src/assets/5237.jpg" // Replace with your image URL
              alt="About MyShop"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="w-full max-w-4xl text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Welcome to MyShop, your top destination for electronics, jewelry,
              and clothing. We pride ourselves on offering top-notch products
              and exceptional customer service.
            </p>
          </div>

          {/* Our Story */}
          <div className="w-full max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              MyShop began in 2020 with a simple idea: to make high-quality
              products accessible to everyone. From our humble beginnings in New
              York, we've grown into a trusted name in online shopping, serving
              customers across the United States.
            </p>
          </div>

          {/* Our Mission */}
          <div className="w-full max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to provide our customers with the best shopping
              experience by offering a curated selection of electronics, jewelry,
              and clothing, all at unbeatable prices.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="w-full max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <ul className="text-lg text-gray-600 list-disc list-inside leading-relaxed">
              <li>High-quality products</li>
              <li>Exceptional customer service</li>
              <li>Fast and reliable shipping</li>
              <li>Unique and exclusive collections</li>
            </ul>
          </div>

          {/* Closing Statement */}
          <div className="w-full max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Thank You
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Thank you for choosing MyShop. We hope you enjoy our products as
              much as we enjoy offering them to you.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
