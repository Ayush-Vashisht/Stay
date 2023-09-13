const mongoose = require("mongoose");

const bookingSchema= new mongoose.Schema({
    place:{type:mongoose.Schema.Types.ObjectId, required:true},
    user:{type:mongoose.Schema.Types.ObjectId,required:true},
    checkIn:{type:Date, required:true},
    checkOut:{type:Date, required:true},
    name:{type:"string",required:true},
    contactNo:{type:String,required:true},
    price:Number,
});


const BookingModel=mongoose.model('Booking',bookingSchema);

module.exports =BookingModel;