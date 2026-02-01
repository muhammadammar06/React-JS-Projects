import React from 'react'
import { useContext } from 'react'
import themeContext from '../context/themeContext'
function Button() {
  const {theme, setTheme, darkTheme, lightTheme} = useContext(themeContext);
  
  return (
    <button className='btn btn-primary' onClick={theme === 'light' ? darkTheme : lightTheme}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}

export default Button