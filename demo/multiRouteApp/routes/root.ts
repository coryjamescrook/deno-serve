import { createRouter } from "../../../index.ts";

export default createRouter("/", "GET", () => {
  return new Response("this is a multiroute app!", { status: 200 });
});
