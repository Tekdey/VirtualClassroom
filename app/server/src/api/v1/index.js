require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const {connectDB} = require("./config/db_root")

const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));

app.get('/', (req, res) => {
  res.send('Hello, world')
})

connectDB()
app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
