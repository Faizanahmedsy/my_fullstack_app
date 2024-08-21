import express from "express";
import cors from "cors";
const app = express();

const PORT = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from backend",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
