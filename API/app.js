require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const logger = require('morgan');

require('./config/db.config')

const app = express();

app.use(express.json());
app.use(logger('dev'));

const routes = require('./config/routes.config')
app.use('/api', routes)


const port = process.env.PORT || 4000;
app.listen(port, () => console.info(`Aplication running at port ${port}`))