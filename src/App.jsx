import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonClose from './components/ButtonClose/ButtonClose'
import TitleName from './components/TitleName/TitleName'
import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Form from './components/Form/Form'

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
          <Route path={"form"} element={<Form />}/>
        </Routes>
      </div>
    </>
  )
}
