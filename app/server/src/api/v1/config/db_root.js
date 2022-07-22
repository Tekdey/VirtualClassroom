const mongoose = require("mongoose");

function connectDB (){
    mongoose
        .connect(process.env.MGDB_URI)
        .then(() => {
            console.log("database running");
        })
        .catch((err) => console.error(err));
}

module.exports = {connectDB}