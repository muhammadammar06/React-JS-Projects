import React, { useContext } from 'react'
import themeContext from '../context/themeContext'
import { useContext } from 'react';

function ChildC() {
  const { theme, setTheme }= useContext(themeContext);
  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className={`d-flex align-items-center justify-content-center vh-100 w-100 ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>
    <button className={`btn btn-success px-5 py-4 fs-5`} onClick={handleClick}>
      {theme === 'light'? 'Dark' : 'Light'}
    </button>
    </div>
  )
}

export default ChildC