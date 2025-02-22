import mongoose from "mongoose";
// import TransactionSchema from "./transaction.js";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        uniqe: true,
        require: true,

    },

   

    password:{
        type: String,
        require: true
    },

    income: [{
         type: Number,
         require: true
        }], // Array of income sources
  
        expenses:
   [{ type: Number }], // Array of expenses
  
   savings: { 
    type: Number, default: 0
 },
  
 budgets: [{ 
    category: String, amount: Number }],
  
    // transactions: [TransactionSchema],
  currency: { type: String, default: 'USD' },
  graphType: { type: String, default: 'bar' }
  


}, {timestamps:true})

const User = mongoose.model('us', userSchema)

export default User;
