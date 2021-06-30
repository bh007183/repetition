const {gql} = require("apollo-server-express")

const typeDefs = gql`

Type User{
    username: String
    email: String
    _id: ID
    password: String!
    shoes: [Shoes]
}

Type Shoes{
    title: String
    _id: ID
}

Type Auth{
    token: String
    user: User
}

Type Query{
    getAllUsers: [Users]
    getOneUser:(username: String!): User
}



`