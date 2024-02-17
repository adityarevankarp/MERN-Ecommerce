const port = 4000;

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
//all req we get from res will be auto parsed to json
app.use(express.json());
//connect react project to express app
app.use(cors());

//Database connection wiht MongoDb
mongoose.connect("mongodb+srv://adityarevankarsep1:qxCsWlTFefwvGDxN@cluster0.nmr2uam.mongodb.net/e-commerce")

//API Creation
app.get('/',(req,res)=>{
    res.send("Express App is Running")
})

// Schema for creating user model
const Users = mongoose.model("Users", {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    cartData: {
      type: Object,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

  const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number
  },
  old_price: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});
app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length>0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id+1;
    }
    else
    { id = 1; }
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({success:true,name:req.body.name})
  });

  app.post("/removeproduct", async (req, res) => {
    const product = await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({success:true,name:req.body.name}) 
  });

  app.get("/allproducts", async (req, res) => {
	let products = await Product.find({});
    console.log("All Products");
    res.send(products);
});

//Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
      console.log(file);
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: storage})
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    })
})
app.use('/images', express.static('upload/images'));
app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port"+port)
    }else{
        console.log("Error-"+error);
    }
})
