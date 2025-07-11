import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="w-[200px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.jewelryName}
          className="h-[140px] w-full object-cover"
        />
      </Link>

      <div className="p-3 flex flex-col gap-1">
        <div className="flex justify-between items-center text-sm">
         <Rating style={{ maxWidth: 80 }} value={product.rating} readOnly />
          <div className="text-orange-700 font-semibold">${product.taka}</div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-800 leading-tight">
            {product.jewelryName}
          </h3>
        </Link>
        
        <button
          onClick={() => addToCart(product)}
          className="mt-2 bg-teal-600 text-white text-sm font-medium py-1.5 rounded-lg hover:bg-teal-700 transition cursor-pointer"
        >
          AddToCart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
