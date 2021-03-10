const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const { MONGODB } = require("./config.js");
//const Post = require("./models/Post");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log(`server is running `);
  return server.listen({ port: 5000 });
});
