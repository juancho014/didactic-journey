require('./db/mongoose');
const express = require('express');
const app = express();
const port =process.env.PORT || 3001;
const Tarjeta = require('./model/tarjeta');
const cors = require('cors');

app.use(express.json());

app.use(cors())


app.get('/tarjetas', (req, res) => {
    Tarjeta.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

app.post('/tarjeta', (req, res) => {

    const tarjeta = new Tarjeta(req.body)
    tarjeta.save()
        .then(() => {
            res.status(201).send(tarjeta);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});