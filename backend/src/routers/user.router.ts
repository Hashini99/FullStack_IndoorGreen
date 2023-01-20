import{Router}from 'express';
import { sample_users } from '../data';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import {  user ,UserModel, } from '../models/user.model';

const router = Router();


router.get("/seed",asyncHandler(
    async (req,res)=>{
      const userCount=await UserModel.countDocuments();
      if(userCount> 0)
      {
        res.send("Seed is already done!");
        return;
      }
  
      await UserModel.create(sample_users);
      res.send("Seed Is Done!");
    }
  ))

router.post("/login",asyncHandler(
    async(req,res)=>
{

    const{email,password}=req.body;
    const user=await UserModel.findOne({email,password});

        if (user){
            res.send(generateTokenResponse(user))
        }
        else{
            res.status(400).send("user name or password is not valied");
        }
})
)

router.post('/register', asyncHandler(
    async (req, res) => {
      const {name, email, password, address} = req.body;
      const user = await UserModel.findOne({email});
      if(user){
        res.status(400)
        .send('User is already exist, please login!');
        return;
      }
      //encrypted pw

      const newUser:user = {
        id:'',
        name,
        email: email.toLowerCase(),
        password: password,
        address,
        isAdmin: false
      }
      const dbUser = await UserModel.create(newUser);
      res.send(generateTokenResponse(dbUser));
    }
  ))


const generateTokenResponse=(user:user)=>{
const token=jwt.sign({
    id: user.id, email:user.email, isAdmin: user.isAdmin
},"hashini",{
    expiresIn:"100d"
});



return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token
  };
}
export default router;