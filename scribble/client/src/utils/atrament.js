// Here will be our javascript code for loading the writtable canvas from Atrament.js

// Require the atrament from our node models
const atrament = require("atrament");

// Create a global object for the sketcher
let sketcher = {};


export default {
    // Method to test the drawable canvas
    create: function () {
        // Create the sketcher area from our canvas with the id
        // mySketcher and give it a height of 800, width of 500
        // And a default color of orange
        sketcher = atrament("#mySketcher", 800, 500, "orange");
        return sketcher;
    },
     // clear the brush strokes from the sketcher canvas
    clear: function () {
        return sketcher.clear();
    },
    // This function will resize the brush with the given size
    resize: function(size) {
        return sketcher.weight = size;
    },
    // This function will change the brush color
    color: function(color) {
        return sketcher.color = color;
    },
    // This function will toggle from erase to draw
    mode: function(mode) {
        return sketcher.mode = mode;
    },


    
}
