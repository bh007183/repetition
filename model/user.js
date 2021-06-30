const {model, Schema} = require("mongoose")
const {Shoes} = require("./shoes")

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    shoes: [Shoes]
})

const User = model("User", userSchema)
module.exports = User