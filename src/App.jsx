import React, { useState } from 'react'
import "./App.css"
import clsx from "clsx"

function App() {
  const [showBlue, setShowBlue] = useState(true) 
  
  function changeShowColor(){
    setShowBlue(!showBlue)
  }

  return (
    <>
      <div 
        className={clsx({
          "blue-div": showBlue, 
          "red-div": !showBlue
        })} 
        onClick={changeShowColor}
      />
    </>
  )
}

export default App
