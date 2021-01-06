const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Just testing');
});

app.get('/', (req, res) => {
    res.type('json');
    res.send(JSON.stringify({hola: "Hola mundo"}));
});