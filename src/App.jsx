import { useEffect, useState } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'

export default function App() {
  const {tg} = useTelegram()
  
  useEffect(() => {
    tg.expand()
  }, [])
  
 

  return (
    <>
      <div className='App'>
      <Routes>
        <Route index element={<ProductList />}/>
      </Routes>
      </div>
    </>
  )
}


