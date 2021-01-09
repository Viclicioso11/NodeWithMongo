const express = require('express');
const userService = require('../../services/users');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    userService.getAllUsers()
        .then((data) => res.json(data))
        .catch((err) => console.log('Error: ', err));
});

router.get('/:id', (req, res) => {
    userService.getUserById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => console.log('Error: ', err));
});

router.delete('/:id', (req, res) => {
    userService.deleteUser(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => console.log('Error: ', err));
});

router.post('/', jsonParser, (req, res) => {
    userService.createUser(req.body)
        .then((data) => res.json(data))
        .catch((err) => console.log('Error: ', err));
});

router.put('/', jsonParser, (req, res) => {
    userService.updateUser(req.body)
        .then((data) => res.json(data))
        .catch((err) => console.log('Error: ', err));
});

module.exports = router;
