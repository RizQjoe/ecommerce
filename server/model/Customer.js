const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    customerName:{
        type: String,
        require: true,
        unique: true
    },

    email:{
       type: String,
       require: true,
       unique 
    },

    password:{
        type: String,
        require: true
    },

    role: {
        type: String
        
    }
});


const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer

