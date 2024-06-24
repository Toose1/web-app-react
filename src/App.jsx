import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonClose from './components/ButtonClose/ButtonClose'
import TitleName from './components/TitleName/TitleName'
import { useTelegram } from './hooks/useTelegram'

export default function App() {

  // const {tg} = useTelegram()
  // useEffect(() => {
  //   tg.expand()
  // }, [])
  
  return (
    <>
      <div>
        {/* <TitleName /> */}
        <h2>Вкусно и точка</h2>
        <ButtonClose />
      </div>
    </>
  )
}
