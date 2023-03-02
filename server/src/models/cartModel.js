const mongoose = require('mongoose')

const  CartSchema = new mongoose.Schema ({

      //  userId :{
      //   type:mongoose.Schema.Types.ObjectId,
      //   ref:"User",
      //   required:true
      //  },
       productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true,
       },
        quantity: {
        type: Number,
        required: true,
        default: 1,
        min: 1
    }
},{
  timestamps:true
})

const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart;