// describe("Server.ts tests", () => {
//     test("Math test", () => {
//     expect(2 + 2).toBe(4);
//     });
//    });
// // import asyncHandler from 'express-async-handler';
// // import { ConnectOptions, connect } from 'mongoose';
// // require("dotenv").config();
// // const mongoose = require("mongoose");
// // // const ArticleService = require("../services/ArticleService");
// //  //const plantRouter=require("backend/src/routers/plant.router.ts");
// //  //import { PlantModel } from '../models/plant.model';
// //  //import PlantModel from "'../models/plant.model'";
// //  const PlantModel  =require ("G:/Github/FullStack_IndoorGreen/backend/src/models/plant.model.ts")
// //  import { plant, PlantSchema } from './plant.model';


// // describe(dbConnect () ;=> {
// //   beforeAll(async () => {
// //     await mongoose.connect(process.env.mongoURI, {
// //         useNewUrlParser: true,
// //         useCreateIndex: true,
// //         useUnifiedTopology: true,
// //     })
// //   });
// //   describe (" dbConnect", () => {
// //     //export const dbConnect = () => {
// //     beforeAll(async () => {
// //     await mongoose.connect(process.env.mongoURI, {
// //         useNewUrlParser: true,
// //         useCreateIndex: true,
// //         useUnifiedTopology: true,
// //     } )
// //  } );


// //   test("/",async () => {
// //     const id = "5ff2454f94eeee0a7acb5c30";
// //     const plants = await PlantModel.find();
// //     //const plant =  await plantRouter.getplantbyId(id);
// //    // expect(article.title).toBe("This is another post example");
// //   });
// // //   router.get("/",asyncHandler(
// // //     async (req,res)=>{
// // //      const plants = await PlantModel.find();
// // //        res.send(plants);
// // //    }
// // //    ))
// //   })
// // //   afterAll(async done => {
// // //     mongoose.disconnect();
// // //     done();
// // // });


import request from "supertest";
import app from "G:/Github/FullStack_IndoorGreen/backend/src/server";


describe("server.ts", () => {
 test("Catch-all route", async () => {
 const res = await request(app).get("/");
 expect(res.body).toEqual({ message: "done" });
 });
});
