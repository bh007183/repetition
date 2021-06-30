const { ObjectID } = require("bson")
const {model, Schema} = require("mongoose")
const {Shoes} = require("./shoes")
const bcrypt = require("bcrypt")

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

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

userSchema.methods.isCorrectPassword = async function(password){
    return bcrypt.compare(password, this.password)
}
const User = model("User", userSchema)
module.exports = User