
const express = require("express");
const app = express();
let port = 8080;



app.get( "/search", (req,res) =>{
    res.send("hello");
})

app.listen(port ,() =>{
    console.log(`app listing on port ${port}`);
})