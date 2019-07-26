const express=require('express')
const fs=require('fs')
const mongodb=require('mongodb')
// const mongoose=require('mongoose')
const mongoose = require('mongoose');
const path=require('path')
const bodyParser = require('body-parser')
const cors=require('cors')


const app = express();
const route = require('./routes/route')
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/api',route)
app.use(cors())


//Mongo db 
mongoose.connect('mongodb://localhost:27017/testdb01');

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongodb")
});
mongoose.connection.on('error',(err) =>{
console.log(err);
});
//mongodb ended

;



app.get('/', function(req, res){
    res.send("Hello world!");
 });



app.listen(3000)
console.log('Listening on port 3000')