const User = require('../models/user');

module.exports = {
    index: (req, res) => {
        User.find({}, (err, users) => {
            if(err) res.json({success: false, err});
            res.json({success: true, users})
        });

    },
    create: (req, res) => {
        User.create(req.body, (err, newUser) => {
            if (err) res.json({ success: false, err});
            res.json({ success:true, newUser });
        })

    },
    show: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if(err) res.json({ success: false, err});
            res.json({success:true, newUser});
        })

    },
    update: (req, res) => {
        let { body, params} = req;
    User.findByIdAndUpdate(params.id, body, { new: true }, (err, updatedUser) => {
        
        if(err) res.json({ success: false, err });
        res.json({ success:true, updatedUser });
    });

    },
    destroy: (req, res) => {
        User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        
            if(err) res.json({ success: false, err});
            res.json({success:true, deletedUser });
        });

    }

};