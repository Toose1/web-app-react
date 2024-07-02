import { useEffect, useState } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Card from './components/Card/Card'

export default function App() {
  const [showButtons, setShowButtons] = useState(false);

  const handleToggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <button 
          className="w-full bg-blue-500 text-white py-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleToggleButtons}
        >
          Add to Cart
        </button>
        {showButtons && (
          <div className="mt-4 flex justify-between items-center transition-opacity duration-500 ease-in-out opacity-100">
            <button 
              className="bg-red-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => console.log('Decrement')}
            >
              -
            </button>
            <span className="mx-4">1</span>
            <button 
              className="bg-green-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => console.log('Increment')}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
