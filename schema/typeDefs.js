const {gql} = require("apollo-server-express")

const typeDefs = gql`

type User{
    username: String
    email: String
    _id: ID
    password: String!
    shoes: [Shoes]
}

type Shoes{
    title: String
    _id: ID
}

type Auth{
    token: String
    user: User
}

type Query{
    getAllUsers: [Users]
    getOneUser(username: String!): Auth
}



`

module.exports = typeDefs