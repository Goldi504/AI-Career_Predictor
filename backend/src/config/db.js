// const mongoose = require("mongoose")

// async function connectToDB(){

//      try{
//         await mongoose.connect(process.env.MONGO_URI)
//           console.log("Connected to database")

//         }
//         catch(err){
//             console.log(err)
//         }
    
// }

// module.exports = connectToDB

// const mongoose = require("mongoose");

// async function connectToDB() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);

//         console.log("✅ Connected to database");
//     } 
//     catch (err) {
//         console.error("❌ Database connection failed:", err.message);

//         // Stop server if DB connection fails
//         process.exit(1);
//     }
// }

// module.exports = connectToDB;
import mongoose from "mongoose";

const connectToDB = async () => {

    try {

        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log(
            "✅ Connected to database"
        );

    } catch (error) {

        console.error(
            "❌ Database connection failed:",
            error.message
        );

        process.exit(1);
    }
};

export default connectToDB;