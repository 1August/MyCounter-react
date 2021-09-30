import './App.css'
import {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0)
    const decreaseCounter = () => counter > -999 && setCounter(counter - 1)
    const increaseCounter = () => counter < 999 && setCounter(counter + 1)
    const clearCounter = () => setCounter(0)

  return (
    <div className="App">
        <div className="boxWrapper">
            <span className="name">My Counter</span>
            <div className="numberWrapper">
                <span className="number">{counter}</span>
            </div>
            <button className="decrease" onClick={decreaseCounter}>-</button>
            <button className="increase" onClick={increaseCounter}>+</button>
            <button className="clear" onClick={clearCounter}>×</button>
        </div>
    </div>
  )
}

export default App

