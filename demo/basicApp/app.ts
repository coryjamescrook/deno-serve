import { Server, Router } from "../../index.ts";

// set port for server
const port: number = 8833;

// create combined app router
const router: Router = {
  ["/"]: {
    requestMethod: "GET",
    handler: () => new Response("this is a basic app example"),
  },
};

// create new server
const server = new Server({ port, router });

// start the server
server.start();
