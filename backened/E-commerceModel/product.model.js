import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
// in object order not matter but in arrray it is
// but "type" must be there
description:{
    required:true,
    type:String
},
name:{
    required:true,
    type:String
},
// good practice is to store our images in AWS bucket/ Cloudanry which provide us a link to acces it 
productImages: {
    type:String
},

price:{
    type:Number,
    default:0
} ,
stock: {
    default:0 ,
    type:Number
} ,
// it act as foriegn key which we need to give ref, ref is name which are storing in database
category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category"
} ,
owner: {
    type: mongoose.Schema.Types.ObjectId ,
    ref: "User",
} ,
},{timestamps:true})

export const Product = mongoose.model('Product', productSchema) ;