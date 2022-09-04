const bodyParser = require('body-parser');
const { json } = require('express');
const express = require('express');
const fs = require('fs');
const userRoute = require("./router/v1/user.route");

const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.user(bodyParser.urlencoded({extended: false}))
const PORT = 3000;

app.get("/", (req, res)=> {
    res.send("server running false");
})

app.get('/write', (req, res)=> {
   res.send("sending response from write")
    
})

app.use('/api/v1/user', userRoute);



app.listen(PORT, ()=> {
    console.log("server running");
})


module.exports = app;