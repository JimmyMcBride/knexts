import queryTypes from "./Query";
import tableTypes from "./Table";

const typeDefs = `
  ${queryTypes},
  ${tableTypes}
`;

export default typeDefs;
