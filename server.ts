import { serve } from "./deps.ts";
import { Router } from "./router.ts";

export type RequestHandler = (req: Request) => Response | Promise<Response>;

export interface ServerOpts {
  port: number;
  router: Router;
}

export const startServer = ({ port, router }: ServerOpts) => {
  const serverRequestHandler: RequestHandler = (req) => {
    const reqUrl = req.url.split(`:${port}`)[1];

    let requestHandler: RequestHandler | undefined;

    for (const path in router) {
      const { handler, requestMethod } = router[path];

      if (path === reqUrl && req.method === requestMethod) {
        requestHandler = handler;
        break;
      }
    }

    if (!requestHandler) {
      requestHandler = () => new Response("Not found", { status: 404 });
    }

    return requestHandler(req);
  };

  serve(serverRequestHandler, { port });

  console.log(`listening on port ${port}`);
};

export class Server {
  private readonly _port: number;
  private readonly _router: Router;

  constructor(opts: Partial<ServerOpts> = {}) {
    this._port = opts.port || 3000;
    this._router = opts.router || {};
  }

  public readonly start = () => {
    return startServer({ port: this._port, router: this._router });
  };
}
