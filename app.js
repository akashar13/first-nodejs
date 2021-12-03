const express = require('express');
const app = express()
const http = require('http');

const tourRouter = require('./routes/tourRoute')

app.use(express.json())


app.use('/api/v1/tours', tourRouter);

module.exports = app