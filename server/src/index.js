const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Admin = require('./models/adminModel')
const app = express();
const connect = require("./config/db")
const adminRoute = require("./routes/adminRoute")
const userRoute = require("./routes/userRoutes")
const cartRoute = require("./routes/cartRoute")

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:true,credentials:true}));

app.get("/getproducts",adminRoute.getProduct)
app.get("/getproduct/:id",adminRoute.getSingleProduct)
app.post("/addproduct",adminRoute.addProduct)
app.delete("/deleteproduct/:id",adminRoute.deleteProduct)
app.put("/update/:id",adminRoute.updateProduct)
app.post("/signup",userRoute.Signup)
app.post("/login",userRoute.Login)
app.get("/users", userRoute.GetAllUser)
app.post("/cart",cartRoute.addToCart)
app.get("/cartproducts",cartRoute.getCart)

app.get("/",(req,res)=>res.send("HELLO"))

app.listen(process.env.PORT,async()=>{
    await connect()
    console.log(`Server started on port http://localhost:${process.env.PORT}`);
})