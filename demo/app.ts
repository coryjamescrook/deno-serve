import { Server, combineRouters } from "../index.ts";

import rootRouter from "./routes/root.ts";
import helloWorldRouter from "./routes/helloWorld.ts";
import asyncRouter from "./routes/async.ts";

const port: number = 8833;

const router = combineRouters(rootRouter, helloWorldRouter, asyncRouter);

const server = new Server({ port, router });
server.start();
