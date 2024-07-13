import { ApolloServer } from "@apollo/server";
import { User } from "./user";

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
        type Query{
            hello: String
        }
        type Mutation {
            ${User.mutations}
        }
    `,
    resolvers: {
      Query: {},
      Mutation: {
        ...User.resolvers.mutation,
      },
    },
  });

  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;
