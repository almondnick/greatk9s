// Resolvers
const { User, Sitting, Training } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('sittingApmts').populate('trainingApmts');
        }
        throw AuthenticationError;
      },
    },

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
      
            return { token, user: { username: user.username } };
        },
        addSitting: async (parent, { phoneNumber, petName, appointmentStartDate, appointmentEndDate, startTime, endTime, comments }, context) => {
          if(context.user) { 
            const sit = await Sitting.create({
              phoneNumber, 
              petName, 
              appointmentStartDate, 
              appointmentEndDate, 
              startTime, 
              endTime, 
              comments,
            }); 

            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { sittingApmts: sit._id } }
            );

            return {sit};
          }
          throw AuthenticationError;
        },
        addTraining: async (parent, {phoneNumber, petName, date, time, comments}, context) => {
          if(context.user) {
            const train = await Training.create({
              phoneNumber,
              petName,
              date,
              time,
              comments
            });

            await User.findOneAndUpdate(
              { _id: context.user._id},
              { $addToSet: { trainingApmts: train._id}}
            );

            return train;
          }
          throw AuthenticationError;
          ('You must be logged in!');
        },
        removeSitting: async (parent, { sittingId }, context) => {
          if (context.user) {
            const sit = await Sitting.findOneAndDelete({
              _id: sittingId,
            });
    
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { sittingApmts: sit._id } }
            );
    
            return sit;
          }
          throw AuthenticationError;
        },
        removeTraining: async (parent, { trainingId }, context) => {
          if (context.user) {
            const train = await Training.findOneAndDelete({
              _id: trainingId,
            });
    
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { trainingApmts: train._id } }
            );
    
            return train;
          }
          throw AuthenticationError;
        }
      }
    };



module.exports = resolvers;