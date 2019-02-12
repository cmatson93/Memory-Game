import React from "react";
import "./Boxes.css";

const Boxes = (props) => {
    console.log(props.boxes)
    const boxes = props.boxes.map(box =>
        
        <div
            className="box" 
            key={box.num} 
            id={box.num} 
            onClick={(id) => props.onClick(box.num)}
            style={{ background: `url("${box.url}") top center / 200px 200px` }}
            // style={{backroundImage: 'url('+ box.url +')'}}
        >
            {box.num}
        </div>)
    return boxes;
}

export default Boxes;