const mongoose = require("mongoose");

async function connectMongoDB(url) {
   //connecting to mongoDB
    return mongoose.connect(url).then(() => console.log("connected to mongo DB"));
}

module.exports = {
    connectMongoDB
}