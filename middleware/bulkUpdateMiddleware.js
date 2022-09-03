const fs = require('fs');

module.exports.bulkUpdateMiddleware = (req, res, next)=> {
    const recievedids = req.body.id;
    const idlen = recievedids.length;
    const keys = Object.keys(req.body);
    const len = keys.length;

    fs.readFile('userData.json', (err, data)=> {
        const users = JSON.parse(data);
        let modifieddata = [];
        for(let i=0;i<idlen;i++){
            modifieddata = users.map(user => {
                if(user.id == Number(recievedids[i])){
                    for(let j=1;j<len;j++){
                        user[keys[j]] = req.body[keys[j]];
                    }
                    return user;
                }else{
                    return user;
                }
            })
        }
        const update = JSON.stringify(modifieddata);
        fs.writeFile('userData.json', update, (err, data)=> {
            console.log("updated")
        })
    })
    next();
}