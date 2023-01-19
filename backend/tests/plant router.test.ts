import request from "supertest";

import router from "G:/Github/FullStack_IndoorGreen/backend/src/routers/plant.router";

describe("plant.router.ts", () => {
    test("Get all users", async () => {
    const res = await request(router).get("/plants");
    expect(res.body).toEqual(["63b04ed9a4b90b8d629b84c4", "63b04ed9a4b90b8d629b84c7", "63b04ed9a4b90b8d629b84c9"]);
    });
   });