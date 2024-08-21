import dotenv from "dotenv";
import express from "express";
import connectDb from "./db/index.js";
import app from "./app.js";
// import cors from "cros";
const app = express();

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.on("error", (err) => console.log("error", err));

    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("error in monogo connection", err));

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
