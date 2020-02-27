// Dependancies 
const express = require("express");



// Require mongoose to allow us to easily write
// to our mongoDb database
const mongoose = require("mongoose");

// Require the api paths from out routes folder so that we
// can tell our app to navigate via our apps
const routes = require("./routes");

// Instantiate our application with express
// This allows us to use our routes to navigate
const app = express();

// Either a development port (like heroku) or a local port of 3000
const PORT = process.env.PORT || 8000;

// Require Passport as a middleware for User Auth
var passport = require("passport");

const path = require("path");

// Middleware for formatting JSON like objects
// Takes in plain text from the http request and parses into a json like object.
// This parsing happens as the request happens, allowing us to have the req.body as a json like object
// without this we would just be recienving plain text.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// If in a profuction envioprment, use the static
// Files found in client/build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
};

//Use the routes we import from our routes folder to navigate our app
app.use(routes);

// Connect to a mongodb database utilizing mongoose
mongoose.connect(
  // connect via a mongoDb uri or a mongodb local host connection
  // This mongoDb uri would come from a hosting site like heroku, allowing us to
  // Link our database
  process.env.MONGODB_URI || "mongodb://localhost/scribble",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(PORT, () => console.log("LISTENING ON PORT", PORT));

//C:\Users\Hunter Wiegand\Desktop\projects\Scribble\scribble
//C:\Users\Hunter Wiegand\Desktop\projects\Scribble\scribble\client\build\index.html