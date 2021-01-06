const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    res.json({ name: "Victor", lastName: "Abud" });
});

router.post('/', jsonParser, (req, res) => {
    console.log('data from req:', req.body);
    res.json({data: {
        ...req.body
    }});
});

module.exports = router;
