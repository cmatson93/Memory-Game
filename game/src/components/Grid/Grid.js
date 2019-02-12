import React, { Component } from "react";
import "./Grid.css";
import Boxes from "../Boxes";

class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes : [
                {num: 1, clicked: false, url: '/Images/Chansey.png'},
                {num: 2, clicked: false, url: '/Images/Charmander.png'},
                {num: 3, clicked: false, url: '/Images/Eve.png'},
                {num: 4, clicked: false, url: '/Images/Growlithe.png'},
                {num: 5, clicked: false, url: '/Images/Jynx.png'},
                {num: 6, clicked: false, url: '/Images/Mankey.png'},
                {num: 7, clicked: false, url: '/Images/Meowith.png'},
                {num: 8, clicked: false, url: '/Images/Pickachu.png'},
                {num: 9, clicked: false, url: '/Images/Ponyta.png'},
                {num: 10, clicked: false, url: '/Images/Psyduck.png'},
                {num: 11, clicked: false, url: '/Images/Quilava.png'},
                {num: 12, clicked: false, url: '/Images/Squirtle.png'},
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
                    this.setState({score : this.state.score + 1});
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
                {/* <p>{this.state.score}</p> */}
                <div className="grid">
                    <Boxes boxes={this.state.boxes} onClick={(id) => this.shuffleBoxes(id)}/>
                </div>
            </div>
        )
    }
}

export default Grid;