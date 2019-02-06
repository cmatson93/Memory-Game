import React, { Component } from "react";
import "./Grid.css";
import Boxes from "../Boxes";

class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes : [
                {num: 1, clicked: false},
                {num: 2, clicked: false},
                {num: 3, clicked: false},
                {num: 4, clicked: false},
                {num: 5, clicked: false},
                {num: 6, clicked: false},
                {num: 7, clicked: false},
                {num: 8, clicked: false},
                {num: 9, clicked: false},
                {num: 10, clicked: false},
                {num: 11, clicked: false},
                {num: 12, clicked: false},
            ],
            score: 0
        }
    };

    shuffleBoxes(id){
        console.log(`Box number: ${id} clicked.`)
        let shuffledBoxes = this.state.boxes.map(box => {
            if (box.num === id) {
                if (box.clicked === false) {
                    box.clicked = true;
                    this.state.score ++;
                } else {
                    this.gameOver();
                }
            }
            return box;
        }).sort(function() { return 0.5 - Math.random() });
        this.setState({boxes: shuffledBoxes})
        console.log(this.state.boxes)
    }

    gameOver(){
        alert("YOU LOOSE");
        const boxes = [
            {num: 1, clicked: false},
            {num: 2, clicked: false},
            {num: 3, clicked: false},
            {num: 4, clicked: false},
            {num: 5, clicked: false},
            {num: 6, clicked: false},
            {num: 7, clicked: false},
            {num: 8, clicked: false},
            {num: 9, clicked: false},
            {num: 10, clicked: false},
            {num: 11, clicked: false},
            {num: 12, clicked: false},
        ]
        this.setState({boxes: boxes, score: 0})
    }

    render() {
        return (
            <div className="container">
                <p>{this.state.score}</p>
                <div className="grid">
                    <Boxes boxes={this.state.boxes} onClick={(id) => this.shuffleBoxes(id)}/>
                </div>
            </div>
        )
    }
}

export default Grid;