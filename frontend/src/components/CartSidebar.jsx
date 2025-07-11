import { useCart } from "../context/CartContext";

const CartSidebar = () => {
  const { cart, updateQuantity, isSidebarOpen, setSidebarOpen, setCheckoutOpen } = useCart();
  

  const total = cart.reduce((sum, item) => sum + Number(item.taka) * Number(item.quantity), 0);

  

  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
      <button onClick={() => setSidebarOpen(false)} className="text-red-500 mb-2">Close</button>
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="mb-2 border-b pb-2">
          <h4>{item.jewelryName}</h4>
          <p>${item.taka} x {item.quantity}</p>
          <div className="flex space-x-2 mt-1">
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
        </div>
      ))}
      <p className="font-bold mt-4">Total: ${total}</p>
      <button onClick={() => {
        setSidebarOpen(false);
        setCheckoutOpen(true);
      }} className="bg-blue-500 text-white w-full mt-4 p-2 rounded">
        Checkout
      </button>
    </div>
  );
};

export default CartSidebar;
