const mongoose = require('mongoose');
const uri = "mongodb+srv://juancho-21:juanjuan2853@cluster0.2jjjz.mongodb.net/personajes?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});