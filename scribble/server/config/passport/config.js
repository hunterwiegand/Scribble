const passport = require("passport");
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use(
    new GoogleStrategy({
        // options for the google strat
        clientID: "860869294067-9rda9dv92g380tgf705ufmv2j0vain0h.apps.googleusercontent.com",
        clientSecret: "HmtkVAi-TKADgTDwIGwtvNo1"
    }), () => {
        // Passport callback function
    }
);