const config = require("../config");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const shortId = require('mongoose-shortid-nodeps');

const userRegisterSchema = new mongoose.Schema({
    _id: {type: shortId, len: 20},
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserRegister = mongoose.model("User", userRegisterSchema);

module.exports = UserRegister;