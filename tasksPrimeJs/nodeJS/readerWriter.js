//import { readFile } from 'node:fs';

const fs = require('node:fs');
const path = 'G:\\Current_Semester_WebDevelopment\\tasksPrimeJs\\nodeJS\\note.txt';

function reader(){
    const data = fs.readFileSync(path, 'utf8');
    return data;
}

async function writer() {
    var str = String(reader()).split('').reverse().join('');
    fs.writeFileSync(path, str);
    console.log(reader());
}

writer()