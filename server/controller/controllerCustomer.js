const Customer = require('../model/Customer')


function getAllCustomer(req, res){
    Customer.find({})
    .then(rows=>{
        res.send(rows)
    })
    .catch(err=>{
        res.status(500),send(err)
    })
}

function findOneCustomer(req, res){
    Customer.findById(req.params.id)
    .then(row=>{
        res.send(row)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

function insertCustomer(req,res){
    Customer.create({
        customerName: req.body.customerName,
        memberid: req.body.memberid,
        address: req.body.address,
        phoenNumber: req.body.phoenNumber
    })
    .then(log=>{
        res.send(log)
    })
    .
}