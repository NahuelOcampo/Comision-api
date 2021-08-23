require('./db/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Personal = require('./model/personal');

app.use(express.json());

// Mostrar todo el personal.
app.get('/personal', (req, res) => {
  Personal.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => res.status(404).send(err));
});

// Agregar personal a la DB.
app.post('/personals', (req, res) => {
  const personal = new Personal(req.body);
  personal
    .save()
    .then(() => {
      res.status(201).send(personal);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`Funcionando en http://localhost:${port}`);
});
