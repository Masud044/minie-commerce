import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart, setSidebarOpen } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-teal-100 w-full container mx-auto top-0 shadow-md">
      <div className="  max-w-screen-xl px-2 py-4 flex justify-between items-center">
        {/* Logo/Home */}
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
          🛍️ MiniShop
        </Link>

        {/* Cart */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
