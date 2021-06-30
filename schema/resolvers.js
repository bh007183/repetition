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
        postUser: async (parent, obj) => {
            const data = await User.create(obj)

            return data
           
        },
        postShoe: async (parent, obj) => {
            const data = await Shoe.create(obj)

            return data
           
        }

       
    }
}

module.exports = resolvers