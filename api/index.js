const express=require("express");
const cors=require('cors');
// const mongoose =require("mongoose");
// require('dotenv').config();
const app=express();

app.use(express.json());

app.use(cors({
    optionsSuccessStatus: 200,
    credentials:true,
    origin:"http://127.0.0.1:5173",
}));

// mongoose.connect(process.env.MONGO_URL);

app.get("/test",(req,res)=>{
    res.json('text ok');
});
app.post('/register', (req,res) => {
    const {name,email,password} = req.body;
    res.json({name,email,password});
  });

app.listen(4000,
    console.log("server is running on port 4000.")
);