import { Link, useLoaderData, useParams } from "react-router-dom";

export default function Products() {
  const data = useLoaderData();
  const { category } = useParams();

  return (
    <div className="w-full p-8 bg-gray-100">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((value, index) => {
          return (
            <li
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <Link to={`/products/${value.id}`} className="h-48">
                  <img
                  src={value.image}
                  alt="productimage"
                  className="h-full object-cover"/>
                </Link>
                
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {value.description}
                </p>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold text-gray-900">
                    ${value.price}
                  </h1>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function FetchCategoryProducts({ params }) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${params.category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}
