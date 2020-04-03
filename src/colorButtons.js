import React from 'react';
import './App.css';

const ColorButtons = ({props}) => {

    //const [textColor, setTextColor] = useState("");
    //const colorList = ["red", "blue", "green"];

    let buttonBuilder = [];
    
    for (let i = 0; i < props.colorList.length; i++) {
        buttonBuilder.push(
            <div class="colorButton">
                <label title={props.colorList[i]} for={props.colorList[i]}>
                <input
                    type="radio"
                    name="color"
                    id={props.colorList[i]}
                    value={props.colorList[i]}
                    onChange={(e) => props.setTextColor(e.target.value)}
                    />
                    {props.colorList[i]}
                </label>

            </div>
        );
    };

    return (
        buttonBuilder
    );
}

export default ColorButtons;