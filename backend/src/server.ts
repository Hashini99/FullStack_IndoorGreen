
import dotenv from 'dotenv';
dotenv.config();

import express, { Router } from "express";
import cors from "cors";
import plantRouter from './routers/plant.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
import router from './routers/plant.router';
//import  chatrouter from './routers/chat.router';
// import * as socketIo from 'socket.io';
// import * as http from 'http';

  
dbConnect();

const app=express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

// // add web socket
// //initialize a simple http server
// const server = http.createServer(app);

// //initialize the Socket server instance
// const io = new socketIo.Server({ server });
// io.on('connection', (socket: socketIo) => {

//     //add event
//     io.on('message', (message: string) => {

//         //send message to client
//         console.log('received: %s', message);
//         socket.io.send(`Hello, you sent -> ${message}`);
//     });

//     //send immediatly a feedback to the incoming connection    
//     io.send('Hi there, I am a WebSocket server');
// });
// app.get("/api/chat")
// //start  server
// server.listen(process.env.PORT || 9000, () => {
//     console.log(`Server started on port :)`);
// });

app.use("/api/plants",plantRouter)
app.use("/api/users",userRouter)
app.use("/api/orders",orderRouter)

const port=3000;
app.listen(port,()=>{

    console.log("Website served on http://localhost:" + port);
})


export default router;