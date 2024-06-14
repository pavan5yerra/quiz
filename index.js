//core modules
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require('apollo-server-express');
const dotenv = require('dotenv');

//user defined modules
const UserTypeDefs = require('./src/typeDefs/user');
const UserResolvers = require('./src/resolvers/user');

//loading environment variables
dotenv.config();


// Define your type definitions (schema)
const typeDefs = gql`
    ${UserTypeDefs }
`;


// Define your resolvers
const resolvers = {
    ...UserResolvers
  };


//connecting to mongoDB
mongoose.connect(process.env.MONGO_URL|| MONGO_URL).then(() => console.log("connected to mongo DB"));


async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();  // Ensure the server is started
    const app = express();
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 8000;

    app.get('/users',async (req,res) => {
        const GET_USERS = gql`
        query {
          users {
            first_name,
            last_name
          }
        }
      `;
        const data = await server.executeOperation({query : GET_USERS});
        return  res.json(data.data.users);
    })

    
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
  }

  

  startServer();