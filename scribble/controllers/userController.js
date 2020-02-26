// Import all models -collections- from the models folder
const db = require("../models");

// CRUD operations for our database.
module.exports = {
    // Get an entry from the User collection with the matching
    // Id, then return that entry in json format
    findById: function(req, res) {
        db.User.findById(req.params.id)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    // Get all entried from the user collection and return
    // in json format
    findAll: function(req, res) {
        db.User.find(req.query)
        .then(dbUser => (res.json({dbUser})))
        .catch(err => res.status(422).json(err));
    },
    // Create a new entry in the User collection
    // Then return that entry in json format
    create: function(req, res) {
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    // Update an entry with the matching id with the parsed req.body
    update: function(req, res) {
        db.User.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
}