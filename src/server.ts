import Express from "express";

import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";

require("dotenv").config();

const app = Express();

app.get("/", async (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}! 🚀`));
