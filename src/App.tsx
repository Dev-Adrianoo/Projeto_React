import React, { useState } from "react";
import image from "./components/images/pexels-padrinan-806421.jpg"
import "./components/styles/style.css"

const App = () => {
  const [frase, setFrase] = useState("");
  
  const frases = [
    "“A perfeição não é alcançada quando já não há mais nada para adicionar, mas quando já não há mais nada que se retirar.” — Antoine de Saint-Exupéry",
    "Sempre escolha uma pessoa preguiçosa para realizar uma tarefa difícil. Ela sempre irá achar a maneira mais simples de se fazer.” — Bill Gates",
    "Menos é mais. Ser simples requer tempo e esforço.” — Jeff Bullas",
    "Se existe uma forma de fazer melhor, descubra-a.” — Thomas Edison"
  ]

  const quebraBiscoito = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setFrase(frases[randomIndex])
  }

  return(
    <main className="container">
      <img className="img" src={image}/>
      <button onClick={quebraBiscoito}>Abrir Biscoito!</button>
      <h3 className="fraseText">{frase}</h3>
    </main>
  )
}

export default App