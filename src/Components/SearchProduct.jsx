import { useContext } from "react";
import { SearchContext } from "./Context/SearchContext";
import { Link } from "react-router-dom";

export default function SearchProduct() {
  const { filteredData } = useContext(SearchContext);

  return (
    <div className="w-full p-8 bg-gray-100">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <li
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <Link to={`/products/${product.id}`} className="h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-cover"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </h1>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </ul>
    </div>
  );
}
