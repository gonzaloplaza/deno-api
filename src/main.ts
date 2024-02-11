import { config } from "@config";
import { server } from "@router/serverRouter.ts";

Deno.serve({ port: config.server.port }, server.fetch);
console.log(
  `🚀 Application ${config.appName} running on PORT ${config.server.port} (${config.server.env})`
);
