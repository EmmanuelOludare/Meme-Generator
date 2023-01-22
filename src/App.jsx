import Header from "./components/Header"
import Meme from "./components/Meme"
import './App.css'
import useLocalStorage from 'use-local-storage'

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark': 'light')
    const switchTheme= () => {
    const newTheme = theme === 'light' ? 'dark': 'light';
        setTheme (newTheme)
    }

  return (
    <div className="App" data-theme={theme}>
      <Header switchTheme={switchTheme}/>
      <Meme/>
    </div>
  )
}

export default App
