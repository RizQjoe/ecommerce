const mongoose = require('mongoose')

const kopiSchema = mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },

    category:{
        type: String,
        require: true
    },
    
    category: {
        type: Number,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    stock:{
        type: Number,
        require: true
    },

    price: {
        type: Number,
        require: true
    },

    image:{
        type: String
    },
});

const Kopi = mongoose.model('Kopi', kopiSchema)

module.exports = Kopi