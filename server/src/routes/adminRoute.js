const Admin = require("../models/adminModel")

// add product route
const addProduct = async(req,res) =>{

    const {image,title,price} = req.body;

    try {
        let newProduct = new Admin({
            image,
            title,
            price
        })
        await newProduct.save();
        res.status(200).send({status:true,product:newProduct})
    } catch (error) {
        res.send({status:false,message:error})
    }
}
// Get all products route
const getProduct = async(req,res) =>{

    try {
        let limit =req.query.limit;
        let page = req.query.page;
        let skip = page*limit;
        let products = await Admin.find().limit(limit)
        // .page(skip)
        res.status(200).send({status:true,products:products})
        
    } catch (error) {
        res.send({status:false,message:error})
    }
}
// single product route
const getSingleProduct = async(req,res) =>{

    try {
        let singleProduct = await Admin.findById(req.params.id)
        res.status(200).send({status:true,product:singleProduct})
    } catch (error) {
        res.send({status:false,message:error})
    }
}
// Delete product route
const deleteProduct = async(req,res) =>{

    let {id} = req.params;

    try {
        let product = await Admin.findOneAndDelete({_id:id})
        res.send({status:true,message:"Product deleted successfully"})
    } catch (error) {
        res.send({status:false,message:error})
    }
}

// Update product route
const updateProduct = async(req,res) =>{
    const id = req.params.id;
    
    try {
        let product = await Admin.findByIdAndUpdate(id)
    
        product.title = req.body.title;
        product.price = req.body.price;
        const prod  = await product.save()
        res.send({updatedProduct: prod,status:true}).status(200)
    } catch (error) {
        res.send(error)
    }

}


module.exports = {
    addProduct,
    getProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct
}