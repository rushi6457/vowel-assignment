
const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:Number, required:true},
  
},{
    timestamps:true
})

const Admin = mongoose.model('Admin',AdminSchema)
module.exports = Admin