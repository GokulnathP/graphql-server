import express from "express"
import {ApolloServer} from "apollo-server-express";
import {readFile} from "fs/promises"
import {resolvers} from "./resolvers.js";

const PORT = 9000
const GRAPHQL_PATH = "/graphql"

const app = express()

const typeDefs = await readFile("./schema.graphql", "utf8")
const apolloServer = new ApolloServer({typeDefs, resolvers})

await apolloServer.start()
apolloServer.applyMiddleware({app, path: GRAPHQL_PATH})

app.listen(PORT, () => {
    console.log(`Server endpoint: http://localhost:${PORT}`)
    console.log(`GraphQL endpoint: http://localhost:${PORT}${GRAPHQL_PATH}`)
})