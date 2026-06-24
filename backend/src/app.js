// // import errorMiddleware from "./middlewares/error.middleware.js";
// // import routes from "./routes/index.js";

// // app.get("/", (req, res) => {
// //   res.send("API Working");
// // });
// // // routes
// // app.use("/api/v1", routes);

// // // global error handler
// // app.use(errorMiddleware);
// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import routes from "./routes/index.js";
// import errorMiddleware from "./middlewares/error.middleware.js";

// const app = express();

// // app.use(cors({
// //   origin: "http://localhost:5173",
// //     credentials: true,
// // }) );


// const cors = require("cors");

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://ai-career-predictor-sigma.vercel.app"
//     ],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("API Working");
// });


// app.use("/api/v1", routes);

// app.use(errorMiddleware);

// export default app;




import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-career-predictor-sigma.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/v1", routes);

app.use(errorMiddleware);

export default app;