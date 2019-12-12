const User = require('../models/User');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.create_user = function (req, res) {
    let user_details = new User(
        {
            name: req.body.name,
            email: req.body.price,
            password: req.body.password
        }
    );

    user_details.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).send('User Created successfully')
    })
};

exports.get_user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.status(200).send(user);
    })
};

exports.update_user_details = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.status(200).send({
            'message': 'user details udpated'
        });
    });
};

exports.authenticate = function (req, res) {
    User.findById(req.params.id, function (err) {
        if (err) return next(err);
    })
};