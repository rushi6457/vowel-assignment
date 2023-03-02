const PaymentModel = require("../models/paymentModel")
const asyncHandler = require("express-async-handler")

const ProceesToPayment = asyncHandler(async(req,res) =>{
    const {cartItem,address,pincode} = req.body;

    const payment = await PaymentModel.create({cartItem,address,pincode})
    const paymentprocess = await PaymentModel.findById(payment._id).populate("cartItems")
    await paymentprocess.save()
    res.status(200).send(paymentprocess)
})

const PaymentData = asyncHandler(async(req,res) =>{
    let data = await PaymentModel.find().populate('cartItems')
    res.status(200).send(data)
})
module.exports = {
    ProceesToPayment,
    PaymentData
}