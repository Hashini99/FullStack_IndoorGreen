import dotenv from 'dotenv';
dotenv.config();


import express, { Router } from "express";
import cors from "cors";
import { sample_plants, sample_users } from "./data";
import jwt from "jsonwebtoken";
import plantRouter from './routers/plant.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
import router from './routers/plant.router';
dbConnect();



const app=express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/plants",plantRouter)
app.use("/api/users",userRouter)
app.use("/api/order",orderRouter)


const port=3000;
app.listen(port,()=>{

    console.log("Website served on http://localhost:" + port);
})


export default router;