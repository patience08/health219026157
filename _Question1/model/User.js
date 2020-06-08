// Create Database Schema and model for users
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    contact: Number,
    name: { type: String, required: true },
    date_of_birth: { type: String },
    contact : { type: Number },
    address: String,
    emergency_contact: Number
});

// Model for the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;