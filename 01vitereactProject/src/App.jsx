import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  

  // //this is if we want to set limit
  // const addValue =() =>{
  //   if(counter >= 0 && counter < 25)
  //   counter = counter + 1;
  //   setCounter(counter)
    
  // }
  const removeValue = ()=>{
    if(counter > 0 && counter <= 25)
    setCounter(counter - 1)
    
  }

  const addValue = () =>{

    // //if we do same operation than this is put into batch operation and same work is done once 
    // counter = counter + 1
    // counter = counter + 1

    //to increment value we can do this
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button><br></br><br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
