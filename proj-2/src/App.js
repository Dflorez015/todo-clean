import Diapositiva from './components/Diapositiva'
import Header from './components/Header'
import React, { useState } from 'react'
import './App.css';

// por: Duvan Florez 23/04/2021

function App() {

  // Información de las diapositivas
  const cartas = [
    {
      title: "Today' s workout plan",
      text: "We' re gonna do 3 fundamental exercises."
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight."
    },
    {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!"
    },
  ]

  // Hook para saber en qué diapositiva me encuentro
  const [diapo, setDiapo] = useState(0)

  // Referenciar para modificar los botones next y ref
  let next = React.createRef()
  let prev = React.createRef()
  let rest = React.createRef()

  // Si hay una diapositiva después 
  const isNext = () => {
    let num = parseInt(diapo)
    if (cartas.length - 1 > num) {
      setDiapo(diapo + 1) // Si hay, escoge la siguiente      
      if (prev.current.disabled == true) {// Si prev está deshabilitado se activa
        prev.current.disabled = false
      }
      if (rest.current.disabled == true) {// Si prev está deshabilitado se activa
        rest.current.disabled = false
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
      if (parseInt(diapo) == 0) {
        prev.current.disabled = true
      }
      if (next.current.disabled == true) { // Si next está deshabilitado se activa
        next.current.disabled = false
      }
    } else {
      prev.current.disabled = true
    }
  }

  const restart = () => {
    setDiapo(0)
    prev.current.disabled = true
    if (next.current.disabled == true) { // Si next está deshabilitado se activa
      next.current.disabled = false
    }
    rest.current.disabled = true
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
          {
            diapo == '1'
          }
          <button className="btn btn-dark" ref={rest} onClick={() => { restart() }}>Restart</button>
          <button className="btn btn-primary" ref={prev} onClick={() => { isPrev() }}>Prev</button>
          <button className="btn btn-primary" ref={next} onClick={() => { isNext() }}>Next</button>
        </div>
      </div>

      <Diapositiva title={diapoTitle()} text={diapoText()} />
    </div>
  );
}

export default App;
