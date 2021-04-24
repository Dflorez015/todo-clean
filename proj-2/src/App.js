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

  // Hooks booleanos para manipular la opción disabled de los botones
  const [nextBool, setNextBool] = useState(false)
  const [prevBool, setPrevBool] = useState(true)
  const [restBool, setRestBool] = useState(true)

  // Si hay una diapositiva después 
  const isNext = () => {
    let num = parseInt(diapo)
    if (cartas.length - 1 > num) {
      setDiapo(diapo + 1) // Si hay, escoge la siguiente      
      if (prevBool == true) {// Si prev está deshabilitado se activa
        setPrevBool(false)
      }
      if (restBool == true) {// Si prev está deshabilitado se activa
        setRestBool(false)
      }
      if (parseInt(diapo) == cartas.length - 2) { // Al terminar ciclo deshabilita next
        setNextBool(true)
      }
    }
  }

  // Si hay una diapositiva antes
  const isPrev = () => {
    let num = parseInt(diapo)
    if (num != 0) {
      setDiapo(diapo - 1) // Si hay, escoge la anterior
      if (nextBool == true) { // Si next está deshabilitado se activa
        setNextBool(false)
      }
      if (parseInt(diapo) == 1) { // Al terminar ciclo deshabilita prev y restart
        setPrevBool(true)
        setRestBool(true)
      }
    }
  }

  // Restaura hasta el inicio de las diapositivas y los valores disabled de los botones
  const restart = () => {
    setDiapo(0)
    if (prevBool == false) {
      setPrevBool(true)
    }
    if (nextBool == true) { // Si next está deshabilitado se activa || caso de bug
      setNextBool(false)
    }
    setRestBool(true)
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
          <button className="btn btn-dark" disabled={restBool} onClick={() => { restart() }}>Restart</button>
          <button className="btn btn-primary" disabled={prevBool} onClick={() => { isPrev() }}>Prev</button>
          <button className="btn btn-primary" disabled={nextBool} onClick={() => { isNext() }}>Next</button>
        </div>
      </div>

      <Diapositiva title={diapoTitle()} text={diapoText()} />
    </div>
  );
}

export default App;
