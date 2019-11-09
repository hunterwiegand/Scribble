// Import React so we can utilize components and jsk
// Which is html like code, but in javascript
import React, { Component } from "react";
// Import all of our components from our components folder
// This allows us to keep a clean file stuctor, and modualize our code
import { Container } from "../components/Grid";
import Canvas from "../components/Canvas"

import testingAtratment from "../utils/atrament.js";

// Class Home that extends our React.Component
// and allows us to create our saved state, which will
// hold our array of books, our search query, and our message
class atramentTest extends Component {

    // After the component mounts (AKA loads in) Do this
    componentDidMount() {
        // Look into our testing Atratment object we imported in
        // and run the .test method from it
        testingAtratment.create();
    }

    Canvas = {
        clear: function() {testingAtratment.clear()},
        small: function() {testingAtratment.resize(10)},
        large: function() {testingAtratment.resize(20)},
        blue: function() {testingAtratment.color("blue")},
        yellow: function() {testingAtratment.color("yellow")},
        green: function() {testingAtratment.color("green")},
        red: function() {testingAtratment.color("red")},
        draw: function() {testingAtratment.mode("draw")},
        erase: function() {testingAtratment.mode("erase")}
    };


    // This is ran after the componenet mounts, returning the home page JSK
    render() {
        return (
            <Container>
                <h1>TESTING</h1>
                <Canvas></Canvas>
                <button
                onClick={() => this.Canvas.clear()}
                >
                    CLEAR
                </button>
                <button
                onClick={() => this.Canvas.small()}
                >
                    SMALL
                </button>
                <button
                onClick={() => this.Canvas.large()}
                >
                    LARGE
                </button>
                <button
                onClick={() => this.Canvas.blue()}
                >
                    BLUE
                </button>
                <button
                onClick={() => this.Canvas.red()}
                >
                    RED
                </button>
                <button
                onClick={() => this.Canvas.draw()}
                >
                    DRAW
                </button>
                <button
                onClick={() => this.Canvas.erase()}
                >
                    ERASE
                </button>
            </Container>
        );
    }
}

export default atramentTest;
