const mongoose = require('mongoose')
Schema= mongoose.Schema

const transactionSchema = mongoose.Schema({
    memberid:{
        type: Schema.Type.ObjectId, reference:"Customer"
    },
    days: Number,
    out_date: Date,
    qty: Number,
    kopi_list: [{
        type: Schema.Type.ObjectId, reference: "Kopi"
    }]
});

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;