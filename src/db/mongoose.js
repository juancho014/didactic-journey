const mongoose = require('mongoose');
const uri = "mongodb+srv://juanfran:<password>@cluster0.5hejk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});