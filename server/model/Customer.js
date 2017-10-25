const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    customerName:{
        type: String,
        require: true
    },

    memberid:{
       type: String,
       require: true 
    },

    address:{
        type: String,
        require: true
    },

    phoneNumber: {
        type: String,
        require: true
    }
});


const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer

