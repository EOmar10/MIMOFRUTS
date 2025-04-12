import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Boton from "./componentes/atomos/Boton.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>INICIO DE APP</h1>
     <Boton>enviar</Boton>
    </>
  )
}

export default App
