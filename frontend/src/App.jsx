

import './App.css'
import { CartProvider } from './context/CartContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navber from "./components/Navber";
import Home from './pages/Home';

import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import ProductDetails from './pages/ProductDetails';



function App() {
  

  return (
    <>
       <CartProvider>
      <Router>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <CartSidebar/>
        <CheckoutModal/>
      </Router>
    </CartProvider>
    </>
  )
}

export default App
