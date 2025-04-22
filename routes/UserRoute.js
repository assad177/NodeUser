const express=require('express');
const router=express.Router();
const User=require('../models/User');

router.get("/person", async(req,res)=>{
    const userData= await User.find().lean();
    res.json(userData)
})

router.get("/person/:id",async(req,res)=>{
  const user=req.params.id;
  const findUser=User.findById(user).lean();
 
if(!findUser) res.json({message:"User not found"})
  res.json(findUser);
 }
 )
 router.post("/person", async(req,res)=>{
    try{
      const data=req.body;
      const newPerson=new User(data);
      const savedata= await newPerson.save();
      res.json({message:"Data saved succesfully"})

    }catch(err) 
    {
res.send('internal server ',err)
    }

})

router.patch("/person/:id",async(req,res)=>{
    try{
    const _id=req.params.id;
    const data=req.body;
    const updatedata= await User.findByIdAndUpdate(_id,data,{
        new:true,
        runValidators:true
    })

      if (!updateData) {
        return res.status(404).json({ message: "Person not found" });
      }
  
      res.json(updatedata);   
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
})

router.delete("/person/:id",async(req,res)=>{
    const _id=req.params.id;
    const deleteUser=User.findByIdAndDelete(_id);
    if(!deleteUser) res.json({message:"User not found"});
    res.json("User Deleted Successfully with name",deleteUser.name);
})
module.exports=router;