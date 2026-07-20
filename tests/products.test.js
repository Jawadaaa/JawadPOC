const request = require("supertest");
const app = require("../server/server");
// Test suite for the /foods endpoint
describe("GET /foods", () => {
  it("should return status 200", async () => {
    const response = await request(app).get("/foods");
    expect(response.statusCode).toBe(200);
  });
// Test to check if the response is an array of food items
  it("should return an array of food items", async () => {
    const response = await request(app).get("/foods");
    expect(Array.isArray(response.body)).toBe(true);
  });
// Test to check if the response contains exactly 5 food items
  it("should return exactly 5 food items", async () => {
    const response = await request(app).get("/foods");
    expect(response.body.length).toBe(5);
  });
// Test to check if each food item has the required properties: id, name, and price
  it("should return items that each have id, name, and price", async () => {
    const response = await request(app).get("/foods");
    response.body.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("price");
    });
  });
});
// Test suite for unknown routes
describe("Unknown routes", () => {
  it("should return 404 for a route that doesn't exist", async () => {
    const response = await request(app).get("/this-route-does-not-exist");
    expect(response.statusCode).toBe(404);
  });
});