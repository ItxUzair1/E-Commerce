import { Link } from "react-router-dom";
import { useLogin } from "../../Context/LoginContext";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function LoginLink() {
  const { isLogged } = useLogin();
  const { cartItems } = useContext(CartContext);
  
  return (
    <div className="w-24 flex justify-center">
      {console.log(isLogged + "hello")}
      {!isLogged ? (
        <Link
          to="/signin"
          className="bg-blue-500 text-white rounded-full px-4 py-2 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md hover:scale-105"
        >
          Sign in
        </Link>
      ) : (
        <Link to="/cart" className="relative">
          <TiShoppingCart className="text-3xl md:text-4xl" />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        </Link>
      )}
    </div>
  );
}
