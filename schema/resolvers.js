const {User, Shoes} = require("../model")
const resolvers = {
    Query: {
        getAllUsers: async () => {
            return User.find({})
        },
        getOneUser: async (parent, {username}) => {
            return User.findOne({username})
        }

        
    },
    Mutate: {

        login: async (parent, {username, password}) => {
            const data = await User.findOne({username})

        },

        postUser: async (parent, obj) => {
            const data = await User.create(obj)

            return data
           
        },
        postShoe: async (parent, obj) => {
            const data = await Shoes.create(obj)

            return data
           
        }

       
    }
}

module.exports = resolvers