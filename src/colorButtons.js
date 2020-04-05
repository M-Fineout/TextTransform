import React from 'react';
import './App.css';

const ColorButtons = ({props}) => {

    let buttonBuilder = [];
    
    for (let i = 0; i < props.colorList.length; i++) {

        // const tooltipWrapper = () => {
        //     return <span style={{color:props.colorList[i]}}>{props.colorList[i]}</span>
        // }
        
        buttonBuilder.push(
            <div key={props.colorList[i]} className="colorButton">
                <label htmlFor={props.colorList[i]}>
                <input
                    type="radio"
                    name="color"
                    id={props.colorList[i]}
                    value={props.colorList[i]}
                    onChange={(e) => props.setTextColor(e.target.value)}
                    />
                    {props.colorList[i]}
                    <span className="tooltipText" 
                          style={{color:props.colorList[i]}}>
                          {props.colorList[i]}
                          </span>
                </label>
            </div>
        );
    };

    return (
        buttonBuilder
    );
}

export default ColorButtons;