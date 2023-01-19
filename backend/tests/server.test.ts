// describe("Server.ts tests", () => {
//     test("Math test", () => {
//     expect(2 + 2).toBe(4);
//     });
//    });
import asyncHandler from 'express-async-handler';
import { ConnectOptions, connect } from 'mongoose';

 import router from "G:/Github/FullStack_IndoorGreen/backend/src/routers/plant.router";
 import Orderrouter from "G:/Github/FullStack_IndoorGreen/backend/src/routers/plant.router";
 import Plantrouter from "G:/Github/FullStack_IndoorGreen/backend/src/routers/plant.router";
 import userRouter from 'G:/Github/FullStack_IndoorGreen/backend/src//routers/user.router';
 require("dotenv").config();
const mongoose = require("mongoose");
import request from "supertest";


  describe (" server test", () => {
    //export const dbConnect = () => {
    beforeAll(async () => {
    await mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    } )
 } );


  
 test("server", async () => {
  const res = await request(router).get("/");
  expect(res.body).toEqual({ message: "done" });
  });
 });
 test("server", async () => {
  const res = await request(Orderrouter).get("/");
  expect(res.body).toEqual({ message: "done" });
  });


 test("server", async () => {
  const res = await request(userRouter).get("/");
  expect(res.body).toEqual({ message: "done" });
  });
 


  
//   afterAll(async done => {
//     mongoose.disconnect();
//     done();
// });

