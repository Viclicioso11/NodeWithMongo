const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.json');
const router = require('./routes/routes');

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
};

//  const environment = config['development'];
const app = express();
// const port = environment.node_port;
// const url = environment.db_connection;

const port = process.env.PORT;
const url = process.env.MONGODB_CONNECTION;


mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('connected');
    })
    .catch( (err) => {
        console.log('Error trying to connect', err);
    });

app.listen(port, () => {
    console.log('Just testing');
});

app.use('/', router);

