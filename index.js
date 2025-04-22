 const express=require('express');
 const app=express();
 const db=require('./db')
 app.use(express.json())
  
 const Menu=require('./models/Menu')
const UserRoute=require('./routes/UserRoute')
require('dotenv').config();
const port=process.env.PORT || 3000;
app.get("/menu",async(req,res)=>{
 const menu=await Menu.find().lean();
 if(!menu) res.json("No menu avalible")
 res.json(menu)
})
app.post("/menu",async(req,res)=>{
  const data=req.body;
  const newMenu=new Menu(data);
  const savedata= await newMenu.save();
  res.json({message:"Data saved succesfully"},savedata)
})
app.patch("/menu/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = req.body;

    const updateData = await Menu.findByIdAndUpdate(_id, data, {
      new: true,
      runValidators: true
    });

    if (!updateData) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json(updateData);  // ✅ Sends back the updated menu item
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/menu/:id", async (req, res) => {
  try {
    const _id = req.params.id;
     

    const updateData = await Menu.findByIdAndDelete(_id,)
     

    if (!updateData) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json(updateData);  // ✅ Sends back the updated menu item
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.use("/",UserRoute)
 
 

 app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
 })