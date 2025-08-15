const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes"); // Import the routes index file
require("dotenv").config();
const PORT = process.env.PORT || 5000;
 
const app = express();
app.use(cors());
app.use(express.json());

console.log(process.env.MONGO_URI)

app.use("/api", routes); // Use the routes index file
app.get("/", (req, res) => {
  res.send("Welcome to expense api");
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {console.log("MongoDB connected")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  })
  .catch((err) => console.log(err));