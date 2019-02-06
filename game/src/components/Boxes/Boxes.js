import React from "react";
import "./Boxes.css";

const Boxes = (props) => {
    const boxes = props.boxes.map(box => <div className="box" key={box.num} id={box.num} onClick={(id) => props.onClick(box.num)}>{box.num}</div>)
    return boxes;
}

export default Boxes;