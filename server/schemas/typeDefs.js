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

type Mutation {
    addUser (firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber, petName): Auth
    login(email: String!, password: String!): Auth
}
`;

module.export = typeDefs