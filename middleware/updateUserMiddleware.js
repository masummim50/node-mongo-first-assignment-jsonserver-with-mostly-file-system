const fs = require('fs');

module.exports.updateUserMiddleware = (req, res, next)=> {
    const recievedid = req.params.id;
    const update = req.body;
    const p = Object.keys(update);
    const len = p.length;

    fs.readFile('userData.json', (err, data)=> {
        const users = JSON.parse(data);
        let found = 0;
        const modifieddata = users.map(d=> {
            if(d.id == Number(recievedid) ){
                found = 1;
                for(let i=0;i<len;i++){
                    d[p[i]] = update[p[i]];
                }
                return d;
            }else{
                return d;
            }
        })
        if(found ==0) res.send("id does not exist");
        const updateddata = JSON.stringify(modifieddata);
        fs.writeFile('userData.json', updateddata, (err, data)=> {
            console.log('data updated')
        })
        next();
    })


}