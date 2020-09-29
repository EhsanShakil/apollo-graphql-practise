const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String
    age: Int
  }

  type Query {
    user: User
  }
`;

module.exports = typeDefs;
