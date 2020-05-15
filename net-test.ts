import { serve } from "https://deno.land/std@v1.0.0-rc1/http/server.ts";
console.log("Running A Deno Test (Net)")
const status = await Deno.permissions.request({ name: "net" });
if (status.state === "granted") {
const s = serve({ port: 80 });
console.log("http://localhost/");
for await (const req of s) {
  req.respond({ body: "Welcome to Deno 🦕\n" });
  }
} else {
  console.log("'net' permission is denied.");
}