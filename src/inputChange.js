import React from 'react';
import './App.css';

const InputChange = (props) => {

    // const [inputText, setInputText] = useState("");
    // const [textColor, setTextColor] = useState("");

    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => {props.setInputText(e.target.value)}}
                placeholder="Enter text here"
                />
            <br />
            <span style={{color:props.textColor}}>{props.inputText}</span>
            </div> 
    );
}

export default InputChange;