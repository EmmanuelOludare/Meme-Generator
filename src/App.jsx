import Header from "./components/Header"
import Meme from "./components/Meme"
import './App.css'
import useLocalStorage from 'use-local-storage'

function App() {
    const toggle = () => {
      document.getElementById("toggle").classList.toggle("active");
      document.querySelector(".App").classList.toggle("night");
      document.querySelector(".header--title").classList.toggle("night--text");
      document.querySelector(".form--button").classList.toggle("night--text");
      document.querySelector(".download--button").classList.toggle("night--text");
      document.querySelector(".status--text").classList.toggle("night-status-text");
  }

  return (
    <div className="App">
      <Header toggle={toggle}/>
      <Meme/>
    </div>
  )
}

export default App
