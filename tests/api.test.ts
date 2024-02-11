import { server } from "@router/serverRouter.ts";
import { assertEquals, assertObjectMatch } from "assert";
import { describe, it } from "testing/bdd.ts";

describe("GET /", () => {
  it("should get HTTP 404 Not Found response", async () => {
    // given
    const expectedResult = {
      error: "Route Not Found",
      code: 404,
    };
    const apiPath = "/";

    // when
    const response = await server.request(apiPath, {
      method: "GET",
    });

    // then
    assertEquals(response.status, 404);
    assertObjectMatch(await response.json(), expectedResult);
  });
});

describe("GET /v1", () => {
  it("should get HTTP 200 Success response", async () => {
    // given
    const expectedResult = { success: true };
    const apiPath = "/v1";

    // when
    const response = await server.request(apiPath, {
      method: "GET",
    });

    // then
    assertEquals(response.status, 200);
    assertObjectMatch(await response.json(), expectedResult);
  });
});
