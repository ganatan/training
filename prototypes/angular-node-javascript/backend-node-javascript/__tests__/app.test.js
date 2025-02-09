import request from "supertest";
import app from "../src/app.js";

describe("GET /persons", () => {
  it("doit retourner une liste de personnes avec un code 200", async () => {
    const response = await request(app).get("/persons");

    expect(true).toBe(true);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(12);
  });
});
