// Import the required modules and libraries
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql";
dotenv.config(); // Load environment variables
const app = express(); // Create an Express application
const port = process.env.PORT || 4000;
// Define a function to start the Apollo Server
const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  app.use(cors());
  app.use(express.json());
  // Parse URL-encoded request bodies with extended option enabled
  app.use(express.urlencoded({ extended: true }));
  // Add the Apollo Server middleware to the "/graphql" route
  app.use("/graphql", expressMiddleware(server));
  // Define a simple route for the root URL ("/") to respond with "Hello World!"
  app.get("/", (req, res) => {
    res.send("Server OK");
  });
  app.listen(port, () => {
    console.log(`Express running on http://localhost:${port}`);
    console.log(`Graphql running on http://localhost:${port}/graphql`);
  });
};
startApolloServer();