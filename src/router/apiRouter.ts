import { Hono } from "hono";
import { healthCheck } from "@services/healthCheck/healthCheck.ts";
import {
  authenticate,
  authenticateRequestValidator,
} from "@services/authentication/index.ts";

const api = new Hono();

api.get("/", (ctx) => ctx.json(healthCheck()));

/* @ts-ignore */
api.post("/auth", authenticateRequestValidator, async (ctx) => {
  /* @ts-ignore */
  return ctx.json(await authenticate(ctx.req.valid("json")));
});

export { api };
