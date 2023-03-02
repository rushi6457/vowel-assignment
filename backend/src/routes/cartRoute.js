const express = require('express');
const { AddToCart, CartData, DeleteCart } = require('../controllers/cartController');
const router = express.Router();

router.post("/addtocart",AddToCart)
router.get("/cartdata",CartData)
router.delete("/deletecart/:id",DeleteCart)

module.exports = router;