const port = 7000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const multer= require("multer");
const path= require("path");
const cors = require("cors");
const { error, log } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//database connection with mongoose
mongoose.connect("mongodb+srv://shivamsinghpatna12345:Shivam12345@cluster0.d2rnhpx.mongodb.net/e-commerce");

//api creaction
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//image storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload =multer({storage:storage})

//creating upload endpoint for images
app.use('/images',express.static('/upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })

})

//schema for creating products

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    new_price:{
        type:Number,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },


})

app.post("/addproduct",async(req,res)=>{
    const product= new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
 
    //creating api for deleting products

    app.post('/removeproduct',async(req,res)=>{
        await Product.findOneAndDelete({id:req.body.id});
        console.log("Removed");
        res.json({
            success:true,
            name:req.body.name
        })
    })

    //Creating api for geting all products
    app.get('/allproducts',async (req,res)=>{
        let products = await Product.find({});
        console.log("all product fetched");
        res.send(products);
    })   

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
app.get('/newcollections',async (req, res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(9);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on port" +port)
    }
    else{
        console.log("Error"+error)
    }
})
