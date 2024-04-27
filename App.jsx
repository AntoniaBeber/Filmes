import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {personagens} from './lista'

import './App.css'




function App() {
  return (
  
  
  <div>
  
    {
  personagens
  .filter((personagem)=>{
    if(personagem.nome.includes('Redfield')){
      return true;
    }
  })
  .map(personagem=>(
    <div>
      <h4>{personagem.nome}</h4>
        <img src= {personagem.url} alt="" srcset="" />
      
    </div>
  ))
}
      
      
      

    </div>
  )
  
}

export default App

