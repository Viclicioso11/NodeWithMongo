const mongoose = require('mongoose');
const userModel = require('../db/models/users');

const createUser = async (user) => {
    const newUser = new userModel({
        Name: user.name,
        Email: user.email,
        Status: true
    });

    newUser.save((err, data) => {
        if(err){
            console.log(err);
        }
    });

    return newUser;
};

const updateUser = async (user) => {
    return await userModel.updateOne({_id: user._id }, {
        $set: {
            "Name": user.Name,
            "Email": user.Email,
        }
    });
};

const deleteUser = async (id) => {
    return await userModel.deleteOne( {_id : id }, (err) => {
        if (err) {
            console.log('Error: ', err);
        }
    });
};

const getUserById = async (id) => {
    return await userModel.find({ '_id': id }, (err, data) => {
        if(err){
            console.log(err);
        }   
    })
    .select('Name Email _id')
    .where('Status').equals(true);

};

const getAllUsers = async () => {
    return await userModel.find((err, data) => {
        if(err){
            console.log(err);
        }   
    })
    .select('Name Email _id')
    .where('Status').equals(true);
};

exports.createUser = createUser;
exports.updateUser = updateUser;
exports.getUserById = getUserById;
exports.getAllUsers = getAllUsers;
exports.deleteUser = deleteUser;
