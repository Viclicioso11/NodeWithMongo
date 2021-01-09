var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserId: Number,
    Name: String,
    Email: String,
    Status: Boolean
});

module.exports = mongoose.model(
    'user', UserSchema, "Users"
);