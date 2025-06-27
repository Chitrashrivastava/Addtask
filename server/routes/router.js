const express=require("express");
const router=express.Router();

const  paymentController=require("../controllers/paymentController")


// Save PayPal transaction
router.post("/api/create-checkout-session",paymentController.makePayment);

// router.post("/save-paypal-transaction", paymentController.savePayPalTransaction);



module.exports=router