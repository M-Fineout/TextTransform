import React from 'react';
import './App.css';

const AddColor = ({ newColor, setNewColor, colorList,
                    setColorList, acceptedColors, }) => {


const handleSetNewColor = () => {
    if (colorList.includes(newColor)) {
        alert(`${newColor} has already been added. Try another color.`);
    } else if (!acceptedColors.includes(newColor)) {
        alert(`${newColor} is not an acceptable color. Please try again.`);    
    } else { 
        setColorList([...colorList, newColor])
        setNewColor("")
    }
};

const handleReturn = (event) => {
    const forceClick = document.getElementById("addColorButton");
    if (event.key === "Enter") {
        forceClick.click();
        event.preventDefault();
    }
}
    return (
        <div>
        <form onSubmit={(e) => {e.PreventDefault()}}>
        <label className="addColorLabel" htmlFor="addColor">Add a color: </label>
        <input
            className="addColorInput"
            onKeyPress={handleReturn}
            type="text"
            name="addColor"
            value={newColor}
            placeholder="Enter a color "
            onChange={(e) => {setNewColor(e.target.value)}}
            />&nbsp;
        <input
            className="addColorButton"
            id="addColorButton"
            type="button"
            value="+"
            onClick={handleSetNewColor}
            />
        </form>
        {/* {props.colorList.map((item) => (<p key={item}>{item}</p>))} */}
        </div>
    );
}

export default AddColor;