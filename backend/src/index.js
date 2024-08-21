import dotenv from "dotenv";
import express from "express";
import connectDb from "./db/index.js";
// import cors from "cros";

dotenv.config({
  path: "./env",
});

connectDb();
const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/api/express", (req, res) => {
//   res.json({
//     message: "Hello from express backend",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
