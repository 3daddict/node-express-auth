const User = require('../models/user');

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    //check if user email creds already exists
    User.findOne({ email: email }, function(err, existingUser) {
        if(err) {
            return next(err);
        }

        //if a user cred exists return err
        if (existingUser) {
            //code 422 = unprocessable entity
            return res.status(422).send({ error: 'Email is already registered, please try logging in' });
        }

        //if a user cred doesnt exists create it to memory
        const user = new User({
            email: email,
            password: password
        });
        //save the user cred in memory to db
        user.save(function(err) {
            if (err) {
                return next(err);
            }
            //respond to req indicating user created
            res.json(user);

        });
    });
}