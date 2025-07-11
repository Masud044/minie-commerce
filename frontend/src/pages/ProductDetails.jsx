import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';


const ProductDetails = () => {
   const {id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
   console.log(id)

 useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);




  // If product data is not yet fetched, display a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" p-4 mt-10 container mx-auto">
      <div className="md:flex gap-10 md:justify-items-start justify-items-center">
        <div className="mb-4">
          
            <img
            src={product.image}
            alt={product.title}
            className="h-64 object-cover"
          />
          
          
        </div>
        <div  className="md:text-justify   text-center">
          <h1 className="text-2xl font-semibold text-black  leading-tight"> Title: {product.jewelryName}</h1>
          <h1 className="text-sm font-semibold text-gray-800 leading-tight mb-4 mt-4"> <span className="text-black font-semibold">Make Element Name:</span> {product.makeElementName}</h1>
          <h1 className="text-sm font-semibold text-gray-800 leading-tight"><span className="text-black font-medium">Shop Name:</span>{product.shopName}</h1>
          <p className="mt-4 mb-4" > <span className="text-black font-medium">Product Description:</span> {product.description}</p>
          <div className="md:justify-between justify-center md:gap-0 gap-6 flex">
            <p className="text-orange-700 font-semibold"> Taka: ${product.taka}</p>
         <Rating style={{ maxWidth: 80 }} value={product.rating} readOnly />
          </div>
          
           <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-teal-600 text-white text-sm font-medium py-2 px-8 rounded-lg hover:bg-teal-700 transition "
        >
          AddToCart
        </button>
        </div>
      </div>

    
    </div>
  );
};

export default ProductDetails;
