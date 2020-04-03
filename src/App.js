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
    <div className="parent">
      <span>See list of accepted colors&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://upload.wikimedia.org/wikipedia/commons/2/2b/SVG_Recognized_color_keyword_names.svg">
           here</a>
        </span>
      <span class="logo">textTransform</span>
      <InputChange inputText={inputText} setInputText={setInputText} 
                   textColor={textColor} />
      <AddColor colorList={colorList} setColorList={setColorList} 
                newColor={newColor} setNewColor={setNewColor} 
                acceptedColors={acceptedColors} />
      <div className="buttonContainer">
      <ColorButtons props={colorButtonProps} />
      </div>
    </div>
  );
}

export default App;
