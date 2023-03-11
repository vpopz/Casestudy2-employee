// Task1: initiate app and run server at 3000
const BodyParser = require("body-parser");
const Cors = require("cors");
const express = require("express");
const Mongoose = require("mongoose");
const {employeeModel} = require('./model/Employee');

let app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(Cors());

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 

Mongoose.connect("mongodb+srv://vaisakh:147852@employee.3vtz3vr.mongodb.net/Company?retryWrites=true&w=majority", {useNewUrlParser:true});
//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist', async (req, res)=>{
    let data = await employeeModel.find();
    res.json(data);
});





//TODO: get single data from db  using api '/api/employeelist/:id'
app.get('/api/employeelist/:id', async (req, res)=>{
    let data = await employeeModel.find(req.body);
    res.json(data);
})




//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post('/api/employeelist', async (req, res)=>{
    var data = await new employeeModel(req.body);
    data.save();
    res.json({status:"success"});
});

app.listen(3000, ()=>{
    console.log('server is up and running');
});



//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete('/api/employeelist/:id', async (req,res)=>{
    let data = await employeeModel.deleteOne(req.body);
    res.json(data);
});



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist', async (req, res)=>{
    let data = await employeeModel.findOneAndUpdate({"id":req.body._id}, req.body);
    res.json(data);
});


// do not delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



