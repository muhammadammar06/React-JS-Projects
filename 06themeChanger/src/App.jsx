import { useState } from 'react'
import ChildA from './Components/ChildA'
import ThemeContextProvider from './context/themeContextProvider'

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ChildA />    
      </ThemeContextProvider>
      
    </>
  )
}

export default App
