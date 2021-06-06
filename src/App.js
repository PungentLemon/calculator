import React, { useState } from "react";
import "./App.css";

import * as math from 'mathjs';

import Button from "./components/Button";
import Input from "./components/Input";
const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  //Below function will take every previous value in the text then it will append the new value
  const addText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const calculateResult=()=>{
    const input= text.join("") //Remove commas

    setResult(math.evaluate(input))
  }

  const resetInput=()=>{
      setText("");
      setResult("")
  }

  const buttonColor = "#b38f00";
  return (
    <div classname="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7"  handleClick={addText}/>
          <Button symbol="8" handleClick={addText}/>
          <Button symbol="9" handleClick={addText}/>
          <Button symbol="/" color={buttonColor} handleClick={addText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addText}/>
          <Button symbol="5" handleClick={addText}/>
          <Button symbol="6" handleClick={addText}/>
          <Button symbol="*" color={buttonColor} handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addText}/>
          <Button symbol="2" handleClick={addText}/>
          <Button symbol="3" handleClick={addText}/>
          <Button symbol="+" color={buttonColor} handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addText}/>
          <Button symbol="." handleClick={addText}/>
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addText}/>
        </div>
        <Button symbol="Clear" color="#e62e00" handleClick={resetInput}/>
      </div>
    </div>
  );
};

export default App;
