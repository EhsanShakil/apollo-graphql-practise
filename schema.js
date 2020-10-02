const { gql } = require("apollo-server");

const typeDefs = gql`
  type Users {
    name: String
    age: Int
  }

  type Query {
    user: [Users]
  }
  input UserInput {
    name: String
    age: Int
  }
  type mutation {
    addUser(input: UserInput): Users
  }
`;

module.exports = typeDefs;
