const fs = require('fs');
const path = require('path');
const { GraphQLScalarType, Kind } = require('graphql');
const { ApolloServer } = require('apollo-server'); 
const { PrismaClient } = require('@prisma/client');
const { getUserId } = require('./utils');

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.toISOString(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Date: dateScalar,
  Query,
  Mutation,
  User,
  Link
}

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({req}) => {
    return {
      ...req,
      prisma,
      userId: 
      req && req.headers.authorization ? getUserId(req) : null
    }
  }
})
server
  .listen()
  .then(({ url }) => 
    console.log(`Server is running on ${url}`)
  );
