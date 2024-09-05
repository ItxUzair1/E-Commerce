import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import { useLogin } from "./Context/LoginContext";

export default function ProductDetails() {
  const data = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);
  const { isLogged } = useLogin();


  function handleCartClick(productid) {
    if (isLogged) {
      // Check if the product is already in the cart
      if (cartItems.includes(productid)) {
        alert("You have already added this product to the cart.");
      } else {
        alert("Product added successfully");
        setCartItems((prevCart) => [...prevCart, productid]);
        console.log(cartItems);
      }
    } else {
      navigate("/signin");
    }
  }

  return (
    <div className="w-full flex justify-center items-center bg-gray-100 p-6">
      <div className="w-3/4 h-auto p-4 flex flex-col gap-5 rounded-lg shadow-md bg-white">
        <div className="w-1/3">
          <img
            src={data.image}
            alt="product image"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="text-gray-600">{data.description}</p>
          <h2 className="text-lg font-bold">Rating {data.rating.rate}</h2>
          <h1 className="text-2xl font-bold">Price ${data.price * quantity}</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleCartClick(data.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export async function FetchProductDetails({ params }) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
}
