const mongoose = require('mongoose');

const tarjeta = mongoose.model('tarjeta', {
   
    name : {
        type: String,
        required: true        
        },
    description: {
        type: String,
        required: true
    },
        description2:{
            type:String,
            required:true
        },
        description3:{
            type:String,
            required:true
        },

    img: { 
        type: String,
        required: true
    }
});

module.exports = tarjeta;