const path = require('path');
const http = require('http');

const _ = require("lodash");
const express = require('express');
const bodyParser = require('body-parser');

const {config} = require('./config/config');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
const server = express();

server.use(express.static(publicPath)); 
server.use(bodyParser.json()); // Gives Express the middleware to handle json. 

// Server Listener:
server.listen(port, () => {
    console.log(`Node server started on port ${port}.`);
});

module.exports = {server};