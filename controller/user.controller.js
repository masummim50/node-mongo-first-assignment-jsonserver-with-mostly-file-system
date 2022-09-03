const fs = require('fs');
const { nextTick } = require('process');

module.exports.getARandomUser = (req, res)=> {
    fs.readFile('userData.json', 'utf8', (err, data)=> {
        const users = JSON.parse(data);
        let r = Math.floor(Math.random() * users.length);
        res.send(users[r]);
    })
};


module.exports.getAllUser = (req, res)=> {
    fs.readFile('userData.json', 'utf8', (err, data)=> {
        const limit = req.query.limit;
        const users = JSON.parse(data);
        const limited = users.slice(0,limit);
        res.send(limited)
    })
}

module.exports.saveAUser = (req, res)=> {
    //too much code so using a middleware here
    res.send('data updated');
}

module.exports.updateUser =(req, res)=> {
    // middleware
    res.send('data updated');
}

module.exports.bulkUpdate = (req, res)=> {

    res.send('all data updated');
}

module.exports.deleteUser = (req, res)=> {
    const delid = req.params.id;
    fs.readFile('userData.json', (err, data)=> {
        const users = JSON.parse(data);
        const filtered = users.filter(user=> user.id !== Number(delid));
        const updated = JSON.stringify(filtered);
        fs.writeFile('userData.json', updated, (err, data)=> {
            console.log('updated');
        })
    })
    res.send('if the id existed then the data has been deleted')
}