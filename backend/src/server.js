import * as fs from "fs";
import { createServer } from "node:http";
import { WebSocketServer } from "ws";
import { createPubSub, createSchema, createYoga } from "graphql-yoga";
import { useServer } from "graphql-ws/lib/use/ws";

import UserModel from "./models/user";
import RoomModel from "./models/room";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";

const pubsub = createPubSub();
export const yoga = createYoga({
  schema: createSchema({
    typeDefs: fs.readFileSync("./src/schema.graphql", "utf-8"),
    resolvers: {
      Query,
      Mutation,
      Subscription,
    },
  }),
  context: {
    UserModel,
    RoomModel,
    pubsub,
  },
  graphiql: {
    subscriptionsProtocol: "WS",
  },
});
