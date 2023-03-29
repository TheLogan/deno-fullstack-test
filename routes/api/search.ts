import { Handlers } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers = {
  GET(req, _ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return new Response(JSON.stringify(results));
  },
  async POST(req, _ctx) {
    const body = await req.json();
    return new Response("Hello world");
  },
};
