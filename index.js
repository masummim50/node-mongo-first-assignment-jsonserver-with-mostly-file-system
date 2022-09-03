const { json } = require('express');
const express = require('express');
const fs = require('fs');
const userRoute = require("./router/v1/user.route");

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res)=> {
    res.send("server running smoothly");
})

app.get('/write', (req, res)=> {
    fs.readFile('./userData.json', (err, data)=> {
        fs.writeFile('mock.json', data, (err, data)=> {
        console.log('d')
    });
    })
    
})

app.use('/api/v1/user', userRoute);



app.listen(PORT, ()=> {
    console.log("server running");
})


module.exports = app;