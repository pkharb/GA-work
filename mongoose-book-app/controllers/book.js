/**
|--------------------------------------------------
| BONUS: Add a Book controller
|--------------------------------------------------
*/

const Book = require('../models/book');

module.exports = {
    index: (req, res) => {
        Book.find(function(err, books){
            if (err) res.json({ success: false, err});
            res.json({ success: true, books});
        });

    },
    create: (req, res) => {
        Book.create(req.body, function(err, newBook){
            if (err) res.json({ success: false, err});
            res.json({ success: true, newBook});
        });

    },
    show: (req, res) => {
        Book.findById(req.params.id, function(err, requestedBook){
            if (err) res.json({ success: false, err});
            res.json({ success: true, requestedBook});
        });

    },
    update: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, req.body, function(err, updatedBook){
            if (err) res.json({ success: false, err});
            res.json({ success: true, updatedBook});
        });

    },
    replace: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, req.body, function(err, replacedBook){
            if (err) res.json({ success: false, err});
            res.json({ success: true, replacedBook});
        });

    },
    destroy: (req, res) => {
        Book.findByIdAndDelete(req.params.id, function(err, deletedBook){
            if (err) res.json({ success: false, err});
            res.json({ success: true, deletedBook});
        });

    }

};
