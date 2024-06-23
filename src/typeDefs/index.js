//user defined modules
const UserTypeDefs = require('./user');
const QuestionTypeDefs = require('./question');
const { gql } = require('apollo-server-express');

// Define your type definitions (schema)
const typeDefs = gql`
    ${UserTypeDefs }
    ${QuestionTypeDefs}
`;

module.exports = typeDefs;