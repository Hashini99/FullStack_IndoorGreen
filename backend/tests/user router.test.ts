import request from "supertest";

import router from "G:/Github/FullStack_IndoorGreen/backend/src/routers/user.router";


describe("user.router.ts", () => {
 test("Catch-all route", async () => {
 const res = await request(router).get("/users");
 expect(res.body).toEqual(["hashini","rashmi","sachini"]);
 });
});