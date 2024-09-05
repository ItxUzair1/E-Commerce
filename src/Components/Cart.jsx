import { useContext, useEffect, useState } from "react";
import { CartContext } from "./Context/CartContext";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext); // Added setCartItems to update cart
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await Promise.all(
        cartItems.map(async (itemID) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${itemID}`
          );
          const data = await response.json();
          return data;
        })
      );

      setItems(fetchedItems);
      setQuantities(
        fetchedItems.reduce((acc, item) => {
          acc[item.id] = 1; // Initialize quantity for each item as 1
          return acc;
        }, {})
      );
    };

    fetchItems();
  }, [cartItems]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = items.reduce((sum, item) => {
        return sum + item.price * (quantities[item.id] || 1);
      }, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [items, quantities]);

  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleDelete = (id) => {
    // Remove the item from cartItems
    setCartItems((prev) => prev.filter((itemID) => itemID !== id));
    // Also remove the item from the items list
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 flex flex-col justify-between h-96"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 object-contain mb-4"
            />
            <h2 className="font-bold text-lg mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
            <div className="flex items-center justify-center mb-2 space-x-4">
              <button
                onClick={() => handleDecrease(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded-full focus:outline-none"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantities[item.id]}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                className="bg-green-500 text-white px-2 py-1 rounded-full focus:outline-none"
              >
                +
              </button>
            </div>
            <p className="text-gray-800 font-semibold mb-2">
              Total: ${(item.price * quantities[item.id]).toFixed(2)}
            </p>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-600 text-white px-3 py-1 rounded-md mt-auto focus:outline-none"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 border rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Total Amount: ${totalPrice.toFixed(2)}</h2>
        <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Checkout
        </button>
      </div>
    </div>
  );
}
