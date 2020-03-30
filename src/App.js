import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputChange from "./inputChange.js";
import ColorButtons from "./colorButtons.js";
import AddColor from "./addColor.js";
import ValidColors from "./acceptedColors.js"

function App() {

  //props
  const [inputText, setInputText] = useState("");
  const [textColor, setTextColor] = useState("");
  const [colorList, setColorList] = useState(["red", "green", "blue"]);
  const [newColor, setNewColor] = useState("");
  const acceptedColors = ValidColors();
  

  //alternate way to pass props
  const colorButtonProps = {colorList, setTextColor};

  return (
    <>
    <InputChange inputText={inputText} setInputText={setInputText} 
                 textColor={textColor} />
    <AddColor colorList={colorList} setColorList={setColorList} 
              newColor={newColor} setNewColor={setNewColor} 
              acceptedColors={acceptedColors} />
    <ColorButtons props={colorButtonProps} />
    </>
  );
}

export default App;
