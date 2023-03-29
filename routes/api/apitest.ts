import { HandlerContext, Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  GET: (_req: Request, _ctx: HandlerContext) => {
    const body = "Hello world!!!!!";
    return new Response(body);
  },
  POST: (_req: Request, _ctx: HandlerContext) => {
    return new Response("Hello world");
  },
};
