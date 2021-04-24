import Diapositiva from './components/Diapositiva'
import Header from './components/Header'
import React, { useState } from 'react'
import './App.css';

// por: Duvan Florez 23/04/2021

function App() {

  // Información de las diapositivas
  const cartas = [
    {
      title: "Diapositiva 1",
      text: "We' re gonna do 3"
    },
    {
      title: "Diapositiva 2",
      text: "Do 10 reps."
    }
  ]

  // Hook para saber en qué diapositiva me encuentro
  const [diapo, setDiapo] = useState(0)

  // Referenciar para modificar los botones next y ref
  let next = React.createRef()
  let prev = React.createRef()

  // Si hay una diapositiva después 
  const isNext = () => {
    let num = parseInt(diapo)
    if (cartas.length - 1 > num) {
      setDiapo(diapo + 1) // Si hay, escoge la siguiente
      if(parseInt(diapo) === cartas.length - 1){
        next.current.disabled = true
      }
    } else {
      next.current.disabled = true
    }
  }

  // Si hay una diapositiva antes
  const isPrev = () => {
    let num = parseInt(diapo)
    if (num != 0) {
      setDiapo(diapo - 1) // Si hay, escoge la anterior
    }
  }

  // Retorna el titulo de la diapositiva actual
  const diapoTitle = () => {
    let num = parseInt(diapo)
    return cartas[num].title
  }

  // Retorna el texto de la diapositiva actual
  const diapoText = () => {
    let num = parseInt(diapo)
    return cartas[num].text
  }

  return (
    <div className="App container">
      <Header />
      <div className="row ">
        <div className="centro">
          <button className="btn btn-dark" onClick={() => { setDiapo(0) }}>Restart</button>
          <button className="btn btn-primary" ref={prev} onClick={() => { isPrev() }}>Prev</button>
          <button className="btn btn-primary" ref={next} onClick={() => { isNext() }}>Next</button>
        </div>
      </div>

      <Diapositiva title={diapoTitle()} text={diapoText()} />
    </div>
  );
}

export default App;
