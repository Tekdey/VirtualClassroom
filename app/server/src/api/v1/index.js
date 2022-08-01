require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const { connectDB } = require("./config/db_root");
const User = require("./schema/User");

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1", require("./route/User"));

app.get("/create", async (req, res) => {
  await bcrypt.hash("password", 10, function (err, hash) {
    if (err) throw err;

    const user = {
      username: "Tekdey",
      first_name: "Nathan",
      last_name: "Bxxxx",
      password: hash,
      contact: {
        email: "tekdey@gmail.com",
      },
    };

    User.create(user)
      .then((usr) => {
        res.status(200).json(usr);
      })
      .catch((err) => res.status(500).json(err));
  });
});

connectDB();
app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
