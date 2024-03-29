const mongoose = require('mongoose');
const passportLocalMessage = require('passport-local-mongoose');

const Schema =  mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMessage);

module.exports = mongoose.model('User', UserSchema);