const express = require('express');
const users = require('./controllers/users');
const products = require('./controllers/products');

const router = express.Router();

router.get('/', (req, res) => {
    res.type('json');
    res.send(JSON.stringify({hola: "Hola mundo"}));
});

router.use('/users', users);
router.use('/products', products);


module.exports = router;