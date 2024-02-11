import { loadSync } from "dotenv";

const env = loadSync();

export const config = {
  appName: "deno-api",
  server: {
    env: Deno.env.get("ENV"),
    port: 3000,
  },
};
