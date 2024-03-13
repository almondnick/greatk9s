// Type Defs
const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    petName: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    me: User
}

type Mutation {
    addUser (firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String, petName: String): Auth
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs