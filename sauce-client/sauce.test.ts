import {assertEquals} from "https://deno.land/x/std@0.65.0/testing/asserts.ts"

Deno.test("it returns the sauce for the given food", async ()=>{
  assertEquals(await sauceFor(""), "");
});
