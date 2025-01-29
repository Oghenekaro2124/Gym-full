const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

const app = express();

// global middleware configuration for cors
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
// Middleware for parsing JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);
// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Server is up and running" });
});

module.exports = app;
