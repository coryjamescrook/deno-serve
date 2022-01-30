import { createRouter } from "../../../index.ts";

export default createRouter("/hello_world", "GET", () => {
  return new Response("HELLO WORLD!", { status: 200 });
});
