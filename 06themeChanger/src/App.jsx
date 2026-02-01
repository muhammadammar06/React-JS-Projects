import React, { useContext, useEffect } from 'react'
import ThemeContextProvider from './context/themeContextProvider';
import themeContext from './context/themeContext';
import Button from './Components/Button';
import Card from './Components/Card';

function App() {
  const {darkTheme} = useContext(themeContext);

  useEffect(()=>{
    darkTheme();
  }, [])
  return (
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card />
        </div>
    </div>
 </div>
  )
}

export default App
