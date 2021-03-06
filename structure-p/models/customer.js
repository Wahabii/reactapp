const Joi =require('joi');
const mongoose=require('mongoose');

const CustomerSchema= new mongoose.Schema({

    name:{
   
   type:String,
   required:true,
   minlength:5,
   maxlength:10
    },
   
    isGold:{
      type:Boolean,
      default:false
    },
   
   phone:{
    
   type:String,
   required:true,
   minlength:5,
   maxlength:10
   
   }
   });
   
const Customer=new mongoose.model('Customer',CustomerSchema);

function validateCustomer(customer){
const schema ={
 name:Joi.string().min(3).max(50).required(),
 phone:Joi.string().min(3).max(50).required(),
 isGold:Joi.boolean()
};
 return Joi.validate(customer,schema);
}



exports.Customer=Customer;
exports.validate=validateCustomer;