'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());

const PORT = process.env.PORT;

const handleWeather =require('./controller/Weather.controller');
const moviesHandler = require('./controller/Movie.controller');

server.get('/weather/:lon/:lat', handleWeather);
server.get('/movies/:query', moviesHandler);

server.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT,()=>{
    console.log('hello from noortan')
})  // kick start the express server to work