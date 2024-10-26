const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => console.log("Server started on port 5000"));
