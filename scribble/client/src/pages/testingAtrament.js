// Import React so we can utilize components and jsk
// Which is html like code, but in javascript
import React, { Component } from "react";
// Import all of our components from our components folder
// This allows us to keep a clean file stuctor, and modualize our code
import { Container } from "../components/Grid";
import Canvas from "../components/Canvas"

// Import our color wheel packaged
import { SketchPicker } from 'react-color'

import testingAtratment from "../utils/atrament.js";

// Class Home that extends our React.Component
// and allows us to create our saved state, which will
// hold our array of books, our search query, and our message
class atramentTest extends Component {


    Canvas = {
        clear: function () { testingAtratment.clear() },
        small: function () { testingAtratment.resize(5) },
        large: function () { testingAtratment.resize(15) },
        color: function (color) { testingAtratment.color(color) },
        draw: function () { testingAtratment.mode("draw") },
        erase: function () { testingAtratment.mode("erase") }
    };

    handleChangeComplete = (color, event) => {
        console.log("color: ", color);
        this.Canvas.color(color.hex);
        console.log("TEST");
    }

    state = {
        displayColorPicker: false,
        currentColor: "",
    };

    // After the component mounts (AKA loads in) Do this
    componentDidMount() {
        // Look into our testing Atratment object we imported in
        // and run the .test method from it
        testingAtratment.create();
        // console.log(this.state.currentColor);
        // this.Canvas.color(this.state.currentColor);
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };

    handleChange = (color) => {
        this.Canvas.color(color.hex);
    }

    // This is ran after the componenet mounts, returning the home page JSK
    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return (
            <Container>
                <button
                    onClick={() => this.Canvas.clear()}
                >
                    CLEAR
                </button>
                <Canvas></Canvas>
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
                    onClick={() => this.Canvas.draw()}
                >
                    DRAW
                </button>
                <button
                    onClick={() => this.Canvas.erase()}
                >
                    ERASE
                </button>
                <div>
                    <button onClick={this.handleClick}>COLOR</button>
                        
                    {this.state.displayColorPicker ? <div style={popover}>
                        <div style={cover} onClick={this.handleClose} />
                        <SketchPicker color={this.state.color} onChange={this.handleChange} />
                    </div> : null}
                </div>
            </Container>
        );
    }
}

export default atramentTest;
