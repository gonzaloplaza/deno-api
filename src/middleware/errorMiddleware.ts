import { Context, HTTPException } from "hono";

export const handleError = (error: Error, context: Context) => {
  console.error(`${error.message}`);

  if (error instanceof HTTPException) {
    return context.json(
      {
        error: error.message,
        code: error.status,
      },
      error.status
    );
  }

  if ("status" in error) {
    return context.json(
      {
        error: error.message || "Unknown error",
        status: error.status || 500,
      },
      error.status || 500
    );
  }

  return context.json(
    {
      error: error.message || "Unknown error",
      status: 500,
    },
    500
  );
};

export const handleNotFoundError = (context: Context) =>
  context.json({ error: "Route Not Found", code: 404 }, 404);
