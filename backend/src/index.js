import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

import { yoga } from "./server";
import mongo from "./mongo";
mongo.connect();

import path from "path";

import express from "express";

const app = express();
app.use("/graphql", yoga);
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const wsServer = new WebSocketServer({
  server: server,
  path: yoga.graphqlEndpoint,
});
useServer(
  {
    execute: (args) => args.rootValue.execute(args),
    subscribe: (args) => args.rootValue.subscribe(args),
    onSubscribe: async (ctx, msg) => {
      const { schema, execute, subscribe, contextFactory, parse, validate } =
        yoga.getEnveloped({
          ...ctx,
          req: ctx.extra.request,
          socket: ctx.extra.socket,
          params: msg.payload,
        });
      const args = {
        schema,
        operationName: msg.payload.operationName,
        document: parse(msg.payload.query),
        variableValues: msg.payload.variables,
        contextValue: await contextFactory(),
        rootValue: {
          execute,
          subscribe,
        },
      };
      const errors = validate(args.schema, args.document);
      if (errors.length) return errors;
      return args;
    },
  },
  wsServer
);
