import { useState } from 'react'
import ChildA from './Components/ChildA'
import themeContext from './context/themeContext'

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <themeContext.Provider value={{theme, setTheme}}>
        <ChildA />    
      </themeContext.Provider>
      
    </>
  )
}

export default App
