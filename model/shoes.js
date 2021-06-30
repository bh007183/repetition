const {model, Schema} = require("mongoose")

const shoeSchema = new Schema({
    title: {
        type: String
    }
    
})

const Shoes = model("Shoes", shoeSchema)

module.exports = Shoes