const mongoose = require('mongoose')

const kopiSchema = mongoose.Schema({
    
    item: {
        type: String,
        require: true
    },

    category:{
        type: String,
        require: true
    },
    
    qty: {
        type: Number,
        require: true
    },

    img: {
        type: String,
        require: True
    },

    price: {
        type: Number,
        require: true
    }

});

const Kopi = mongoose.model('Kopi', kopiSchema)

module.exports = Kopi