const Transaction = require('../model/Transaction')
const Kopi = require('../model/Kopi')

function allTransaction(req,res){
    Transaction.find({})
    .populate('kopilist', 'title')
    .then(rows =>{
        res.send(rows)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}

function findOneTransaction(req,res){
    Transaction.findById(req.params.id)
    .populate('kopilist')
    .then(row =>{
        res.send(row)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}

function insertTransaction(req, res){
    Transaction.create({
        memberid: req.body.memberid,
        days: req.body.day,
        out_date: req.body.out_date,
        qty: req.body.qty,
        kopi_list: req.body.kopi_list
    })
    .then(log =>{
        res.send(log)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}

function updateTransaction(req, res){
    Transaction.findOneAndUpdate({
        _id: req.params.id
    },{
        memberid: req.body.memberid,
        days: req.body.day,
        out_date: req.body.out_date,
        qty: req.body.qty,
        kopi_list: req.body.kopi_list
    })
    .then(log =>{
        res.send(log)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}

function deleteTransaction(req,res){
    Transaction.deleteOne({
        _id: req.params.id
    })
    .then(log=>{
        res.send(log)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}


// function addKopiTransaction(req, res){
//     Transaction.findOneAndUpdate({
//         memberid: req.params.id
//     },{
//         $push:{
//             kopi_list: req.body.kopi_list
//         }
//     })
//     .then(log=>{
//         Kopi.findById(req.body.kopi_list)
//         .then(row =>{
//             Kopi.
//         })
//     })
// }


module.exports = {
    allTransaction,
    findOneTransaction,
    insertTransaction,
    updateTransaction,
    deleteTransaction
}