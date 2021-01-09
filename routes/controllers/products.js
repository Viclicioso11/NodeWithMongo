const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    res.json({ name: "Product1", cost: 10 });
});

router.post('/', jsonParser, (req, res) => {
    res.json({data: {
        ...req.body
    }});
});

module.exports = router;