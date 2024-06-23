import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Buttons/ButtonClose.css'
import ButtonClose from './components/Buttons/ButtonClose'
import SpanName from './components/Header/SpanName'

const tg = window.Telegram.WebApp

export default function App() {
  

  return (
    <>
      <div>
        <h1>Вкусно и Точка</h1>
        <SpanName />
        <ButtonClose />
      </div>
    </>
  )
}
