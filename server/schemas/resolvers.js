// Resolvers
const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    // Query: {
    //   Training: async () => {
    //     return User.findOne().populate('Training');
    //   },
    //   Sitting: async () => {
    //     return User.findOne().populate('Sitting');
    //   },
    //   Appointment: async () => {
    //     return User.findOne().populate('Appointment')
    //   },
    // },

    Mutation: {
        addUser: async (parent, { firstName, lastName, email, password }) => {
          const user = await User.create({ firstName, lastName, email, password });
          const token = signToken(user);
    
          return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user: {username: user.username } };
          }
        }
      };

module.exports = resolvers;