import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Buttons/ButtonClose.css'
import ButtonClose from './components/Buttons/ButtonClose'
import TitleName from './components/Header/TitleName'

const tg = window.Telegram.WebApp

export default function App() {
  

  return (
    <>
      <div>
        <h1>Вкусно и Точка</h1>
        <TitleName />
        <ButtonClose />
      </div>
    </>
  )
}
