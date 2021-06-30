const { ObjectID } = require("bson")
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
    shoes: {
        type: Schema.Types.ObjectId,
        ref: "Shoes"
    }
})

const User = model("User", userSchema)
module.exports = User