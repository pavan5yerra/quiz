//core modules
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require('apollo-server-express');
const dotenv = require('dotenv');

//user defined modules
const UserTypeDefs = require('./src/typeDefs/user');
const UserResolvers = require('./src/resolvers/user');

const QuestionTypeDefs = require('./src/typeDefs/question');
const QuestionResolvers = require('./src/resolvers/question');


const {handleGetAllQuestions} = require('./src/controller/QuestionController');
const {handleGetAllUsers} = require('./src/controller/UserController');
//loading environment variables
dotenv.config();


// Define your type definitions (schema)
const typeDefs = gql`
    ${UserTypeDefs }
    ${QuestionTypeDefs}
`;


// Define your resolvers
const resolvers = {
    Query: {
      ...UserResolvers ,
      ...QuestionResolvers
    }
  };


//connecting to mongoDB
mongoose.connect(process.env.MONGO_URL|| MONGO_URL).then(() => console.log("connected to mongo DB"));


async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();  // Ensure the server is started
    const app = express();
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 8000;

    app.get('/users',(req,res) => handleGetAllUsers(req,res,server));

    app.get('/questions',  (req,res) => handleGetAllQuestions(req,res,server));

    
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
  }

  

  startServer();