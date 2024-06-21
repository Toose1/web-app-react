import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


const tg = window.Telegram.WebApp

export default function App() {
  
const onClose = () => {
  tg.close()
}

  return (
    <>
      <div>
        <h1>Start</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  )
}
