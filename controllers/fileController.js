const fse = require('fs-extra');
const path = require('path');


const mkdir  = async(pathTemp,folderName)=>{
    pathTemp = path.join(pathTemp,`${folderName}`);
    try {
        await fse.ensureDir(pathTemp);
        console.log('Directory perfectly created');
    } catch (error) {
        console.log('Error creating directory');
    }

}

const mkFile = async(pathTemp,folderName,fileName)=>{
    pathTemp = path.join(pathTemp,folderName,`${fileName}`);
    try {
        await fse.ensureFile(pathTemp)
        console.log('éxcel file created sucessfully');
    } catch (error) {
        console.log(error);
    }
}

const deleteFile = async(pathTemp,fileName)=>{
    pathTemp = path.join(pathTemp,`${fileName}`);
    try {
        await fse.remove(pathTemp);
        console.log('file removed');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    mkdir,
    mkFile,
    deleteFile
}


