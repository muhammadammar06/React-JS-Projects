import React from 'react'
import { useState } from 'react'
import themeContext from './themeContext'

function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState('light');
  const darkTheme = () => {
    setTheme('dark');
  };
  const lightTheme = () => {
    setTheme('light');
  };
  return (
    <themeContext.Provider value={{setTheme, lightTheme, darkTheme, theme}}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeContextProvider