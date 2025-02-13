// import { useState } from 'react'

import ButtonOp from './componets/three-lines/three-lines.jsx'
import LogoYouTube from './componets/logo/logo.jsx'
import BarraDePesquisa from './componets/search-bar/search-bar.jsx'
import house from './assets/home.png'
import shorts from './assets/shorts.png'
import inscricoes from './assets/Inscricoes.png'
import perfil from './assets/perfil.png'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        
          <ButtonOp></ButtonOp>{/*Botão de opçoes de três linhas  */}
          <LogoYouTube></LogoYouTube>
          <BarraDePesquisa></BarraDePesquisa>
        
        <div className='correcao'></div>
      </header>
      <div className='menu'>
        <ul>

          <li className='button'>
            <img src={house}></img>
            <a>Inicio</a>
          </li>

          <li className='button'>
            <img src={shorts}></img>
            <a>Short</a>
          </li>

          <li className='button'>
            <img src={inscricoes}></img>
            <a>Inscriçoes</a>
          </li>

          <li className='button'>
            <img src={perfil} alt="" />
            <a>Você</a>
          </li>

        </ul>
      </div>
    </>
  )
}

export default App
