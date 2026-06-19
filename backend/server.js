// require ("dotenv").config()
// const express = require("express");
// const cors = require("cors");


// const app = express();

// app.use(cors());
// app.use(express.json());
// const connectToDB = require("./config/db");
// connectToDB();

// // routes connect
// app.use("/api/careers", require("./routes"));

// app.get("/", (req, res) => {
//   res.send("API Running ");
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// require("dotenv").config();

// const express = require("express");
// const connectToDB = require("./src/config/db");

// const app = express();

// connectToDB();

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });
import dotenv from "dotenv";
dotenv.config();

console.log("ENV TEST:", process.env.GEMINI_API_KEY);

import app from "./src/app.js";
import connectToDB from "./src/config/db.js";

const PORT = process.env.PORT || 5000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });