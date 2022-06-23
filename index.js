'use strict'

const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);
const {mkdir,mkFile,deleteFile} =require('./controllers/fileController');

async function asigning(){
    const folderName = await new Promise(resolve=>{
        rl.question('Digite el nombre del folder: ',info =>resolve(info));
    })
    const fileName = await new Promise(resolve=>{
        rl.question('Digite el nombre del archivo: ',info=>resolve(info));
    })
    await mkdir(__dirname,folderName);
    await mkFile(__dirname,folderName,fileName);
}

asigning();





