import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

//router
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import cloudinary from "cloudinary";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./public"))); // Static files middleware

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/jobs", authenticateUser, jobRouter);

// SPA Fallback Route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

// Error Handling Middleware
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

// Connect to database and start server
const port = process.env.PORT || 5100;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on PORT ${port}....`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

// import "express-async-errors";
// import * as dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import morgan from "morgan";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";

// //router
// import jobRouter from "./routes/jobRouter.js";
// import { body, validationResult } from "express-validator";

// import { authenticateUser } from "./middleware/authMiddleware.js";
// //import { validateTest } from "./middleware/validationMiddleware.js";

// import authRouter from "./routes/authRouter.js";
// import userRouter from "./routes/userRouter.js";

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import path from "path";

// import cloudinary from "cloudinary";

// //middleware
// import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// const __dirname = dirname(fileURLToPath(import.meta.url));

// //app.use(express.static(path.resolve(__dirname, "./public")));

// const app = express();

// // Middleware
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
// app.use(cookieParser());
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/v1/test", (req, res) => {
//   res.json({ msg: "test route" });
// });
// // app.post(
// //   "/api/v1/test",
// //   validateTest,
// //   [body("name").notEmpty().withMessage("name is required")],
// //   (req, res) => {
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       const errorMessages = errors.array().map((error) => error.msg);
// //       return res.status(400).json({ errors: errorMessages });
// //     }
// //     next();
// //   },
// //   (req, res) => {
// //     const { name } = req.body;
// //     res.json({ msg: `hello ${name}` });
// //   }
// // );

// app.post("/", (req, res) => {
//   console.log(req);
//   res.json({ message: "data received", data: req.body });
// });

// app.use("/api/v1/jobs", authenticateUser, jobRouter);
// app.use("/api/v1/users", authenticateUser, userRouter);
// //auth
// app.use("/api/v1/auth", authRouter);

// app.get('*',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'./public','index.html'));
// })

// // Error handling
// app.use("*", (req, res) => {
//   res.status(404).json({ msg: "not found" });
// });

// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).json({ msg: "something went wrong" });
// });

// app.use(errorHandlerMiddleware);

// // Connect to database and start server
// const port = process.env.PORT || 5100;

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`server running on PORT ${port}....`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//     process.exit(1);
//   });
