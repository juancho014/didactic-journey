require('./db/mongoose');
const express = require('express');
const app = express();
const port =process.env.PORT || 3001;
const Juego = require('./model/juegos');

app.use(express.json());




app.get('/juegos', (req, res) => {
    Juego.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

app.post('/juego', (req, res) => {
    const juego = new Juego(req.body)
    juego.save()
        .then(() => {
            res.status(201).send(juego);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});