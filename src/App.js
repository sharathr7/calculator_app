import React, { useState } from 'react'

const App = () => {
  const [result, setResult] = useState("")

  const handleClick = (e) => {
     setResult(result.concat(e.target.innerText))
  }
 
  const clear = () => {
    setResult("")
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult("Error")
    }
    
  }

  return (
    <>
      <div className="main-div">
        <div className="content">
            <div className="row1">
                <input type="text" className='display' value={result} readOnly/>
                <div id="clear" onClick={clear} className="button button-clear">
                    <p> C </p>
                </div>
            </div>
            <div className="row2">
                <div name="1" onClick={handleClick} className="button dark">
                    <p> 1 </p>
                </div>
                <div name="2" onClick={handleClick} className="button dark">
                    <p> 2 </p>
                </div>
                <div name="3" onClick={handleClick} className="button dark">
                    <p> 3 </p>
                </div>
                <div name="/" onClick={handleClick} className="button">
                    <p className="symbol"> / </p>
                </div>
            </div>
            <div name="4" className="row3">
                <div onClick={handleClick} className="button dark">
                    <p> 4 </p>
                </div>
                <div name="5" onClick={handleClick} className="button dark">
                    <p> 5 </p>
                </div>
                <div name="6" onClick={handleClick} className="button dark">
                    <p> 6 </p>
                </div>
                <div name="-" onClick={handleClick} className="button">
                    <p className="symbol"> - </p>
                </div>
            </div>
            <div name="7" className="row4">
                <div onClick={handleClick} className="button dark">
                    <p> 7 </p>
                </div>
                <div name="8" onClick={handleClick} className="button dark">
                    <p> 8 </p>
                </div>
                <div name="9" onClick={handleClick} className="button dark">
                    <p> 9 </p>
                </div>
                <div name="+" onClick={handleClick} className="button">
                    <p className="symbol"> + </p>
                </div>
            </div>
            <div name="." className="row5">
                <div onClick={handleClick} className="button dark">
                    <p className="symbol"> . </p>
                </div>
                <div name="0" onClick={handleClick} className="button dark">
                    <p> 0 </p>
                </div>
                <div onClick={calculate} className="button cyan">
                    <p className="symbol"> = </p>
                </div>
                <div name="*" onClick={handleClick} className="button">
                    <p className="symbol"> * </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App