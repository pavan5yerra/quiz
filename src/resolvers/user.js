const User = require('../models/user');

const UserResolvers = {
    Query: {
      users: async () => User.find(),
      user: async (_, { id }) => User.findById(id),
    }
  };

  module.exports = UserResolvers;