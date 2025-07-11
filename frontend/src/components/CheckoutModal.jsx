import { useCart } from "../context/CartContext";
import { useState } from "react";
import Swal from 'sweetalert2'
const CheckoutModal = () => {
  const { isCheckoutOpen, setCheckoutOpen, cart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed", form, cart);
   Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Order placed successfully",
  showConfirmButton: false,
  timer: 1500
});
    setCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>
        <input placeholder="Name" required className="w-full mb-2 p-2 border" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" required className="w-full mb-2 p-2 border" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Address" required className="w-full mb-4 p-2 border" onChange={e => setForm({ ...form, address: e.target.value })} />
        <button type="submit" className="bg-green-500 text-white w-full p-2 rounded">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutModal;
