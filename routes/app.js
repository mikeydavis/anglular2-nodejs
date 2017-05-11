var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var Message = require('../models/message');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/messages',function(req, res, next){
    Message.find(function(err,result){
        if (err){
            //use return so not to execute the rest of the code
            return res.status(500).json({
                message:'error fetching messages'
            });
        }
        res.status(200).json({
            data: result
        });
    })
});


router.post('/message', function(req, res, next){
    console.log('posting message');
    var message = new Message({
        content:req.body.content
    });

    message.save(function(err,result){
        console.log('save message to mongo db');
        if (err){
            return res.status(500).json({
                message:'error saving'
            });
        }
        res.status(201).json({
            message:'Data saved'
        });
    });
});

module.exports = router;
