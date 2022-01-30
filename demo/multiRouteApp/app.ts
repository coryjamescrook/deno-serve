import { Server, combineRouters } from "../../index.ts";

// import routers
import rootRouter from "./routes/root.ts";
import helloWorldRouter from "./routes/helloWorld.ts";
import asyncRouter from "./routes/async.ts";

// set port for server
const port: number = 8833;

// create combined app router
const router = combineRouters(rootRouter, helloWorldRouter, asyncRouter);

// create new server
const server = new Server({ port, router });

// start the server
server.start();
