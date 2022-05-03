import {serve} from "https://deno.land/std@0.119.0/http/server.ts";

function handler(_req: Request): Response {
  const u = new URL(_req.url);
  const food: string = u.searchParams.get("");
  return new Response(JSON.stringify());
}

console.log("Listening on http://localhost:8000");
serve(handler);
