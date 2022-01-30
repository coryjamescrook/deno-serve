import { RequestHandler } from "./server.ts";

export interface RouteOpts {
  requestMethod: `GET` | `PUT` | "POST" | "DELETE" | "OPTIONS";
  handler: RequestHandler;
}

export interface Router {
  [routePath: string]: RouteOpts;
}

export const createRouter = (
  path: string,
  requestMethod: RouteOpts["requestMethod"],
  handler: RouteOpts["handler"]
): Router => {
  return {
    [path]: {
      requestMethod,
      handler,
    },
  };
};

export const combineRouters = (...routers: Router[]): Router => {
  return routers.reduce((combinedRouter: Router, currRouter: Router) => {
    return {
      ...combinedRouter,
      ...currRouter,
    };
  }, {} as Router);
};
