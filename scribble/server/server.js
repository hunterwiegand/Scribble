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
const PORT = process.env.PORT || 3001;

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
}

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




const User = require('./models/user');


// const router = express.Router();

























// // this is our get method
// // this method fetches all available data in our database
// router.get('/getData', (req, res) => {
//   User.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });

// // this is our update method
// // this method overwrites existing data in our database
// router.post('/updateData', (req, res) => {
//   const { id, update } = req.body;
//   User.findByIdAndUpdate(id, update, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// // this is our delete method
// // this method removes existing data in our database
// router.delete('/deleteData', (req, res) => {
//   const { id } = req.body;
//   User.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// // this is our create methid
// // this method adds new data in our database
// router.post('/putData', (req, res) => {
//   let user = new User();

//   const { id, message } = req.body;

//   if ((!id && id !== 0) || !message) {
//     return res.json({
//       success: false,
//       error: 'INVALID INPUTS',
//     });
//   }
//   user.message = message;
//   user.id = id;
//   user.save((err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// // append /api for our http requests
// app.use('/api', router);

// launch our backend into a port
app.listen(PORT, () => console.log("LISTENING ON PORT", PORT));
