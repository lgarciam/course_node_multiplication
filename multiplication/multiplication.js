const fs = require('fs');
const colors = require('colors');

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            reject(`Input is not a number: ${base}`)
            return;
        }

        let data = "";
        for (let i = 1; i <= limit; i++)
            data += `${base} * ${i} = ${base * i}\n`;
    
        let fileName = `table-${base}.txt`;
        fs.writeFile(`./tables/${fileName}`, data, (err) => {
            if (err) reject(err);
            else resolve(fileName);
        });

    });
};

let showTable = (base, limit = 10) => {
    if(!Number(base)) throw new Error(`Base is not a number: ${base}`);
    if(!Number(limit)) throw new Error(`Limit is not a number: ${limit}`);

    for (let i = 1; i <= limit; i++) 
        console.log(`${base} * ${i} = ${base * i}`.red)
}

module.exports = {
    createFile,
    showTable
}