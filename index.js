const port = process.env.PORT || 3000;
const express = require('express');
const app = express.createServer();

app.listen(port, () => {
    console.log('Just testing');
});