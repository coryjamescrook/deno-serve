import { createRouter } from "../../index.ts";

export default createRouter("/", "GET", () => {
  return new Response("root route!", { status: 200 });
});
