import React, { Component } from "react";
import "./Grid.css";

class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <div className="grid"></div>
            </div>
        )
    }
}

export default Grid;