import {serve} from "https://deno.land/std@0.119.0/http/server.ts";
import {sauceFor} from './sauce.ts';

function handler(_req: Request): Response {
  const u = new URL(_req.url);
  const food: string = u.searchParams.get("_for") || "fries";
  const deliciousSauce: string = sauceFor(food);
  return new Response(JSON.stringify({deliciousSauce: deliciousSauce}));
}

console.log("Listening on http://localhost:8000");
serve(handler);
