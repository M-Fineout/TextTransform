import React from 'react';
import "./App.css";

const InputChange = (props) => {

    // const [inputText, setInputText] = useState("");
    // const [textColor, setTextColor] = useState("");

    return (
        <div class="inputContainer">
            <textarea 
                className="inputBox" 
                onChange={(e) => {props.setInputText(e.target.value)}}
                placeholder="Enter text here"
                />
            <br />
            <p 
                className="outputBox"
                style={{color:props.textColor}}>
                {props.inputText}
                </p>
            </div> 
    );
}

export default InputChange;