/** @format */

const { Schema, model } = require("mongoose");

const userShema = Schema({
    _id: String,
    avatar: String,
    birthday: Date,
    email: String,
    firstName: String,
    lastName: String,
    sex: String,
});

const User = model("User", userShema);
module.exports = User;

//
