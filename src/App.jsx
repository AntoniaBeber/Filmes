import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {personagens} from './lista'

import './App.css'

function App() {
  return (
    <div>
      <h1>Membros Familia Redfield</h1>
      { personagens.map(personagem=> (
        <li>
         {personagens.nome}
        </li>
      ))}
      
      
      

    </div>
  )
  
}

export default App
