import request from "supertest";

import router from "G:/Github/FullStack_IndoorGreen/backend/src/routers/order.router";

describe("order.router.ts", () => {
 test("Catch-all route", async () => {
 const res = await request(router).get("/");
 expect(res.body).toEqual({ message: "Allo! Catch-all route." });
 });
});