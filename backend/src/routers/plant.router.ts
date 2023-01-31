import{Router}from 'express';
import { sample_plants } from '../data';
import asyncHandler from 'express-async-handler';
import { PlantModel } from '../models/plant.model';


const router = Router();

router.get("/seed",asyncHandler(
  async (req,res)=>{
    const plantCount=await PlantModel.countDocuments();
    if(plantCount> 0)
    {
      res.send("Seed is already done!");
      return;
    }

    await PlantModel.create(sample_plants);
    res.send("Seed Is Done!");
  }
))


router.get("/",asyncHandler(
 async (req,res)=>{
  const plants = await PlantModel.find();
    res.send(plants);
}
))





router.get("/:plantId", asyncHandler(
  async (req, res) => {
    const plant = await PlantModel.findById(req.params.plantId);
    res.send(plant);
}
))
export default router;