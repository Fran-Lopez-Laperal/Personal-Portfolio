require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const logger = require('morgan');



const app = express();

app.use(express.json());
app.use(logger('dev'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Aplication running at port ${port}`))