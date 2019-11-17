const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
}
var res = getRandomInt(7);
const img = "img" + res + ".png";

const schema = new Schema({
    name : {type: String, required:true, minlength:4, maxlength:10},
    email : {type: String, trim:true, lowercase:true, unique:true, pattern: "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"},
    username : {type : String, unique: true, minlength: 5, maxlength: 10},
    pass : {type: String, required:true, pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"},
    creationDate:{ type:Date, default: Date.now},
    wantedVideoGames : {type: Array, default: ''},
    profile_picture : {type: String, default: img}, //give user a random profile img
})

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);