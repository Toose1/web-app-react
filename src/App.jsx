import { useEffect, useState } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Card from './components/Card/Card'

export default function App() {
  const [flipped, setFlipped] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const handleAddToCart = () => {
    setShowQuantityButtons(true);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={`flip-card w-80 ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flip-card-front p-4">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Product" 
              className="w-full h-48 object-cover cursor-pointer" 
              onClick={flipCard} 
            />
            <h2 className="text-xl font-semibold mt-4">Product Name</h2>
            <p className="text-gray-500 mt-2">$99.99</p>
            <button 
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            {showQuantityButtons && (
              <div className="mt-4 flex justify-between items-center">
                <button 
                  className="bg-red-500 text-white py-2 px-4 rounded" 
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <span className="mx-4">{quantity}</span>
                <button 
                  className="bg-green-500 text-white py-2 px-4 rounded" 
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
            )}
          </div>
          <div className="flip-card-back p-4 bg-blue-50 text-gray-800">
            <h3 className="text-lg font-semibold">Product Description</h3>
            <p className="mt-2">
              This is a detailed description of the product. It includes all the features and benefits that make this product special and worth purchasing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
