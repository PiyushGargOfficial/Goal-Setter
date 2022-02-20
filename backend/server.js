const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const { connectDB } = require("./config/db");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
const goalRoutes = require("./routes/goalRoutes");

app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
