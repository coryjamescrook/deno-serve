import { createRouter } from "../../index.ts";

export default createRouter("/async", "GET", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Response("an asyncronous request/response!", { status: 200 })
      );
    }, 1500);
  });
});
