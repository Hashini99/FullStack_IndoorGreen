import express from "express";
import cors from "cors";
import { sample_plants, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app=express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

//plant api

app.get("/api/plants",(req,res)=>{
    res.send(sample_plants);
}
)

//search api

//app.get("/api/plants/search/:searchterm"),(req,res)=>{
  // const searchterm=req.params.searchterm;
//}
//)

//tag

//tag name api

//search by id api

app.get("/api/plants/:plantId",(req,res)=>{
    const plantId=req.params.plantId;
    const plant=sample_plants.find(plant=>plant.id==plantId);
    res.send(plant);  
}
)

app.post("/api/users/login",(req,res)=>
{

    const{email,password}=req.body;
    const user=sample_users.find(user=>user.email===email &&
        user.password===password);

        if (user){
            res.send(generateTokenResponse(user))
        }
        else{
            res.status(400).send("user name or password is not valied");
        }
})
const generateTokenResponse=(user:any)=>{
const token=jwt.sign({
    email:user.email, isAdmin:user.isAdmin
},"hashini",{
    expiresIn:"100d"
});

user.token;
return user;
}
const port=5000;
app.listen(port,()=>{

    console.log("Website served on http://localhost:" + port);
})