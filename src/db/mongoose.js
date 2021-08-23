const mongoose = require('mongoose');
const uri = "mongodb+srv://juanfran:juanjuan2853@cluster0.5hejk.mongodb.net/myFirstjuego?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});