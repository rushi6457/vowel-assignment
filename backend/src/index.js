const express = require('express');
const connect = require('./config/connect');
const app = express();
const cors = require('cors');
const router = require('./routes/userRoute');
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin:true,credentials:true}))

app.get("/",(req,res) =>res.send("HELLO"));
app.use("/user",router)
app.use("/admin",productRoute)
app.use("/cart",cartRoute)

app.listen(process.env.PORT,async() =>{
    await connect()
    console.log(`Server started on http://localhost:${process.env.PORT}`);
})

