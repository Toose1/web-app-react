import { useEffect, useState } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Card from './components/Card/Card'

export default function App() {
  const {tg} = useTelegram()
  
  useEffect(() => {
    tg.expand()
  }, [])
  
  return (
    <>
      <div className='App'>
        <Routes>
          <Route index element={<Card />}/>
        </Routes>
        <button>Test</button>
      </div>
    </>
  )
}
