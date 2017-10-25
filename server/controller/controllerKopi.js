const Kopi = require('../model/Kopi')


function getAllKopi(req, res){
    // console.log('testt')
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

    //create
function insertKopi(req, res){
    Kopi.create({
        //
        item: req.body.item,
        category: req.body.category,
        qty: parseInt(req.body.qty),
        img: req.body.img,
        price: req.body.price
    })
    .then(function (data){
        res.send(data)
    })
    .catch(function(err){
        res.status(500).send(err)
    })
}
 // update GET.PUT
function UpdateKopi (req, res){
    Kopi.findOneAndUpdate({
        _id: req.params.id
    },{
        item: req.body.item,
        category: req.body.category,
        qty: parseInt(req.body.qty),
        img: req.body.img,
        price: req.body.price
    })
    .then(function(result){
        res.send(result)
    })
    .catch(function (err){
        res.status(300).send(err)
    })

}

//delete
function deleteKopi(req, res){
    Kopi.deleteOne({
        _id:req.params.id
    })
    .then(function (row){
        res.send(row)
    })
}



module.exports ={
    getAllKopi,
    findOneKopi,
    insertKopi,
    UpdateKopi,
    deleteKopi
}

