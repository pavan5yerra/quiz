const UserResolvers = require('./user');
const QuestionResolvers = require('./question');


// Define your resolvers
const resolvers = {
    Query: {
      ...UserResolvers ,
      ...QuestionResolvers
    }
  };


module.exports = resolvers;
