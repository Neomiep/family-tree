const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    name: String,
    parent:{},
    children:[]
})

let User = mongoose.model("user", userSchema)

module.exports = User;