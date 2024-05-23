const express = require("express");
const mongoose = require('mongoose');

 const app = express();

 mongoose.connect("mongodb://admin:admin@mongo:27017/?authSource=admin"
 ).then(()=> console.log("successfully connected to db"))
 .catch((e) => console.log(e));

 app.get("/", (req,res) => {
    res.send("<h1> hello rao garu! </h1>");
 });

 const port = process.env.PORT ||3000;

 app.listen(port, () => console.log(`listening on port ${port}`));