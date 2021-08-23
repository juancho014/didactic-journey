const mongoose = require('mongoose');

const juego = mongoose.model('juego', {
   
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

    img: { 
        type: String,
        required: true
    }
});

module.exports = juego;