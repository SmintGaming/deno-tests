console.log("Running Deno Test (Read)")
const status = await Deno.permissions.request({ name: "read" });
if (status.state === "granted") {
console.log(Deno.cwd());
} else {
  console.log("'read' permission is denied.");
}