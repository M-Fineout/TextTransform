import React from 'react';
import "./App.css";

const InputChange = (props) => {

    return (
        <div className="inputContainer">
            <textarea 
                className="inputBox" 
                onChange={(e) => {props.setInputText(e.target.value)}}
                placeholder="Enter text here"
                />
            <br />
            <textarea 
                className="outputBox"
                readOnly={true}
                style={{color:props.textColor}}
                value={props.inputText}
                />
            </div> 
    );
}

export default InputChange;