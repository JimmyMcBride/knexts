const queryTypes = `
  type Query {
    hello(name: String): String!
    users: [User!]!
  }
`;

export default queryTypes;
