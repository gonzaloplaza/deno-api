import { Hono } from "hono";
import { compress, cors, logger, secureHeaders } from "hono/middleware";
import { api } from "./apiRouter.ts";
import {
  handleError,
  handleNotFoundError,
} from "../middleware/errorMiddleware.ts";

const server = new Hono();

/** Middlewares */
server.use("*", logger(), cors(), secureHeaders(), compress());

/** API Routes */
server.route("/v1", api);

/** Error handlers */
server.notFound(handleNotFoundError);
server.onError(handleError);

export { server };
