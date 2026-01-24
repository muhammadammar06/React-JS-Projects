import {useState} from 'react'
import Button from "./Components/Button"

function App() {
  let [color, setColor] = useState("red");
  const changeColor = (color) =>{
    setColor(color);
  }
  return (
    <>
    <div className={`w-full h-screen bg-${color}-900 flex items-end justify-center`}>
      <div className="w-4/5 bg-amber-400 h-20 flex items-center justify-around">
        <Button name="Yellow" color="yellow" onClickFunction={changeColor}/>
        <Button name="Green" color="green" onClickFunction={changeColor}/>
        <Button name="Red" color="red" onClickFunction={changeColor}/>
        <Button name="Purple" color="purple" onClickFunction={changeColor}/>
        <Button name="Pink" color="pink" onClickFunction={changeColor}/>
      </div>
    </div>
    </>
  )
}

export default App
