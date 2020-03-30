import React from 'react';
import './App.css';
import Button from 'react-bootstrap';

const AddColor = ({ newColor, setNewColor, colorList, setColorList, acceptedColors }) => {

    // const [colorList, setColorList] = useState(["red", "green", "blue"]);
    // const [newColor, setNewColor] = useState("");

    return (
        <div>
        <form onSubmit={(e) => {e.PreventDefault()}}>
        <label htmlFor="addColor">Add a color</label>
        <input
            type="text"
            name="addColor"
            value={newColor}
            placeholder="Enter a color "
            onChange={(e) => {setNewColor(e.target.value)}}
            />
        <input
            className="btn btn-primary"
            type="button"
            value="+"
            onClick={() => {
                console.log(acceptedColors);
                if (acceptedColors.includes(newColor)) {
                    setColorList([...colorList, newColor])
                    setNewColor("")
                }
                else {
                    alert(`${newColor} is not an acceptable color. Please try again.`);
                }
                }}
            />
        </form>
        {/* {props.colorList.map((item) => (<p key={item}>{item}</p>))} */}
        </div>
    );
}

export default AddColor;