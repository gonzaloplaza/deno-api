import { server } from "@router/serverRouter.ts";
import { expect } from "hono/expect";

Deno.test("GET /v1", async () => {
  // given
  const expectedResult = { success: true };

  // when
  const response = await server.request("/v1", {
    method: "GET",
  });

  // then
  expect(response.status).toBe(200);
  expect(await response.json()).toHaveProperty(
    "success",
    expectedResult.success
  );
});
