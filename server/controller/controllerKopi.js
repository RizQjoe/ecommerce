const Kopi = require('../model/Kopi')


function getAllKopi(req, res){
    Kopi.find({})
    .then(rows =>{
        res.send(rows)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}

function findOneKopi(req,res){
    Kopi.findById(req.params.id)
    .then(rows =>{
        res.send(row)
    })
    .catch(err =>{
      res.status(500).send(row)  
    })
}

function insertKopi(req,res){
    Kopi.create({
        // masih mikir 
    })
}