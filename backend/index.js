const port = 7000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const multer= require("multer");
const path= require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//database connection with mongoose
mongoose.connect("mongodb+srv://shivamsinghpatna12345:Shivam12345@cluster0.d2rnhpx.mongodb.net/e-commerce");

//api connection
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})


//schema createing for user model
const Users= mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//creating end point for registering the user
app.post('/signup',async (req,res)=>{
    let check=await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false, errors:"existing user found with same email address"}) 
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;        
    }

    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    

    const token= jwt.sign(data,'secret_ecom');
    // res.json({success:true,token})
    res.json({success:true,token})
})


//creating end point for user login
app.post('/login', async(req, res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})

//create end point for new collection   
// app.get('/newcollections',async (req, res)=>{
//     let products = await Product.find({});
//     let newcollection = products.slice(1).slice(-8);
//     console.log("NewCollection Fetched");
//     res.send(newcollection);
// })


app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on port" +port)
    }
    else{
        console.log("Error"+error)
    }
})
