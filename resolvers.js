import {Book} from "./db.js";

export const resolvers = {
    Query: {
        greeting: () => new Error("unauthorized"),
        books: () => Book.findAll()
    }
}