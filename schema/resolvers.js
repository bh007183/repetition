const {User, Shoes} = require("../model")
const resolvers = {
    Query: {
        getAllUsers: () => {
            return User.find({})
        },
        getOneUser: (parent, {username}) => {
            return User.findOne({username})

        }
    }
}