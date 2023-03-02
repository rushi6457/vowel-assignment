const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    cartItems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    },
   
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const PaymentModel = mongoose.model("Payment",PaymentSchema)
module.exports = PaymentModel