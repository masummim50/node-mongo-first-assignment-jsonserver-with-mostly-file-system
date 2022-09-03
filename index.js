const { json } = require('express');
const express = require('express');
const fs = require('fs');
const userRoute = require("./router/v1/user.route");

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res)=> {
    fs.readFile('./userData.json', 'utf8', (err, data)=> {
        const d = JSON.parse(data);
        res.send(d);
        console.log(d.length);
    })
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