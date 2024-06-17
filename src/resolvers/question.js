const Questions = require('../models/question');

const QuestionResolvers = {
      questions: async () => Questions.find()
  };

  module.exports = QuestionResolvers;