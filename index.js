//core modules
const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const dotenv = require('dotenv');

//user modules
const typeDefs = require('./src/typeDefs/index');
const resolvers = require('./src/resolvers/index');

const questionRouter = require('./src/routes/question');
const userRouter = require('./src/routes/user');

const {connectMongoDB} = require('./connection');

//loading environment variables
dotenv.config();

//connecting to mongoDB
connectMongoDB(process.env.MONGO_URL|| MONGO_URL);

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();  // Ensure the server is started
    const app = express();
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 8000;

    //middlewares
    app.use('/users',userRouter(server));
    app.use("/questions" , questionRouter(server));

    
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
  }

  
  startServer();