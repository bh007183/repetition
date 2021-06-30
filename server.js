const express = require("express")
const app = express()
const {ApolloServer} = require("apollo-server-express")
const PORT = process.env.PORT || 8080
const {resolvers, typeDefs} = require("./schema")
const {jwtAuthentication} = require("./utils/auth")
const db = require("./config/connections")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: jwtAuthentication

})

server.applyMiddleware({app})
app.use(express.urlencoded({extended: true}))
app.use(express.json())


db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`)
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
})


