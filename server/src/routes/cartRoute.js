const Product = require("../models/adminModel")
const User = require("../models/userModel")
const Cart = require("../models/cartModel")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')

// async function addToCart (req, res) {

//     try {
//         const { userId,productId, quantity } = req.body;
        
//         const ProductExist = await Cart.findOne({ productId});
//         if (ProductExist) {
//              res.send({ message: 'Product exists',status:false });
//         }
       
//         const cart = new Cart({ productId, quantity });
//          console.log('cart: ', cart);
//         const newCartItem = await Cart.findById(cart_id).populate('productId').populate("userId")
//        return  res.status(201).send({ message:`Product Added Successfully in cart`  ,  cart});
//     } catch (error) {
//         return res.status(404).send({ message: 'Something went wrong' });
//     }

// }


async function getCart(req, res) {
   const prodId = req.query;
    console.log('prodId: ', prodId);

    try {
    const carts = await Cart.find().populate('productId')
    return res.status(200).send({ carts });
        
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
        
}

const addToCart = async(req,res) =>{

        const user = await User.findOne()
        console.log(user)
        const cart = new Cart({
            quantity:req.body.quantity,
            productId:req.body.productId,
            // userId: req.body.userId
        })
        await cart.save()
        res.send({status:true,cart})
}

module.exports = {
    addToCart,
    getCart
}