import { zValidator } from "hono/zod-validator";
import { HTTPException } from "hono";
import { z } from "zod";

const authenticateRequestSchema = z.object({
  username: z.string().email().min(6),
  password: z.string().min(6),
});

export const authenticateRequestValidator = zValidator(
  "json",
  authenticateRequestSchema,
  (result) => {
    if (!result.success) {
      throw new HTTPException(401, { message: "Unauthorized" });
    }
  }
);
