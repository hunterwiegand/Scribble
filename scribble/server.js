// Declare Dependancies

// Express allows us to connect our backend server to our react frontend
const express = require("express");

// Mongoose allows us to easily write to our MongoDB database
const mongoose = require("mongoose");

// Routes allows us to navigate throughout our app via api paths
const routes = require("./routes");

// Instantiate our application with express
const app = express();

// Port will use either a development PORT from heroku or a local port
const PORT = process.argv.PORT || 3000;

// Middleware for formatting JSON like objects
// Takes in plain text from the http request and parses into a json like object.
// This parsing happens as the request happens, allowing us to have the req.body as a json like object
// without this we would just be recienving plain text.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If in a production enviorment use the static files found in client/build
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Use the routes we imported from our "./routes" folder to navigate our app
app.use(routes);

// Connect to a mongoDB database via mongoose
mongoose.connect(
  //Connect by mongoDB URI or from the local host connection
  // The URI will come from heroku, allowin us to link our database
  process.env.MONGODB_URI || "",
{
    useCreateIndex: true,
    useNewUrlParser: true
}  
);

// Start the application, listening on the PORT we are using
app.listen(PORT, () =>
    console.log("🌎  ==> API Server now listening on PORT ${PORT}!")
);