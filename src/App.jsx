import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Buttons/ButtonClose.css'
import ButtonClose from './components/Buttons/ButtonClose'
import TitleName from './components/Header/TitleName'
import { useTelegram } from './hooks/useTelegram'

export default function App() {

  const {tg} = useTelegram()
  useEffect(() => {
    tg.ready()
  }, [])
  
  return (
    <>
      <div>
        <TitleName />
        <h2>KFC</h2>
        <ButtonClose />
      </div>
    </>
  )
}
