require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const logger = require('morgan');

require('./config/db.config')

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        process.env.CORS_ORIGIN || "http://localhost:4000"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    //configuracion de las cabecereas de las peticiones del service.
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");

    if (req.method === "OPTIONS") {
        return res.status(200).send();
    }

    next();
});

const routes = require('./config/routes.config')
app.use('/api', routes)


const port = process.env.PORT || 4000;
app.listen(port, () => console.info(`Aplication running at port ${port}`))