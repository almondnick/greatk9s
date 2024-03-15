// Type Defs
const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    petName: String
    sittingApmts: [Sitting]!
    trainingApmts: [Training]!
}

type Sitting {
    phoneNumber: String
    petName: String
    appointmentStartDate: String
    appointmentEndDate: String
    startTime: String
    endTime: String
    comments: String
}

type Training {
    phoneNumber: String
    petName: String
    date: String
    time: String
    comments: String
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
    addTraining(phoneNumber: String!, petName: String!, date: String!, time: String!, comments: String): Auth
}
`;

module.exports = typeDefs