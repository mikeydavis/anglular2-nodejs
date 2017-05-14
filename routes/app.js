var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/employee');

router.get('/', function(req, res, next) {
    res.render('index');
});


router.get('/employees',function(req,res,next){
    Employee.find(function(err,result){
        if (err){
            return res.status(500).json({
                message:'fetch error'
            });
        }
        res.status(200).json({
            data : result
        })
    });
})

router.post('/employee', function(req, res, next){
    console.log('routing - posting employee');
    
    var employee = new Employee({
        name: req.body.name,
        position: req.body.position
    });

    employee.save(function(err,result){
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

router.post('/employeeupdate',function(req,res,next){
    
    const employee = new Employee(
    {
        _id: req.body.id,
        name: req.body.name,
        position: req.body.position
    });

    employee.update(employee,function(err,data){
        if(err) throw err;
    });

    // Employee.findOneAndUpdate(query, update,options,function(err,doc){
    //     if (err) return next(err);
    //     res.json(doc);
    // });
});

router.delete('/employee/:id',function(req,res,next){

    Employee.remove({_id:req.params.id}, function(err){
        if(err) throw err;
    });
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
