const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

app.use(routes);

app.use(function (req, res, next) {
    res.status(404).json({
      erro: "Not Found",
      method: req.method,
      originalUrl: req.originalUrl
    });
  });

app.listen(process.env.PORT || 3333)