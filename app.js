const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.connect('mongodb://rizqjoe:admin123@cluster0-shard-00-00-l8k4w.mongodb.net:27017,cluster0-shard-00-01-l8k4w.mongodb.net:27017,cluster0-shard-00-02-l8k4w.mongodb.net:27017/kopi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors())



app,listen(3000,()=>{
    console.log("listen port 3000")
})