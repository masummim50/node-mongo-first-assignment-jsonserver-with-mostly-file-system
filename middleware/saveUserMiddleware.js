const fs = require('fs');


module.exports.saveAUserMiddleware = (req, res, next)=> {
    const user = req.body;
    if(user.id&& user.name && user.gender && user.address && user.contact && user.photourl){
        
    fs.readFile('userData.json', (err, data)=> {
        const olddata = JSON.parse(data);
        const founduser = olddata.filter(d=> d.id == user.id);
        if(founduser.length>0){
            const arr = [];
            olddata.map(d=> arr.push(d.id));
            let st = arr.join(",");
            res.send(`id already exists, add an id thats not in here: ${st}`);
            return;
        }
        olddata.push(user);
        const newdata = JSON.stringify(olddata);
        fs.writeFile('userData.json', newdata, (err, data)=> {
            console.log('data updated');
        })
        next();
    })}else{
        res.send('some properties are missing')
    }
}