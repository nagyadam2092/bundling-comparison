const cTable = require('console.table');
const { statSync, lstatSync, readdirSync, existsSync } = require('fs');
const { join } = require('path');
const FILENAME = 'bundle.min.js';
const isDirectory = source => lstatSync(source).isDirectory();
const getFilesizeInKBytes = fileObj => Math.round(statSync(`${fileObj.dir}/${fileObj.FILENAME}`).size / 1000);
const processDir = dir => existsSync(`${dir}/${FILENAME}`) ? { dir, size: getFilesizeInKBytes({ dir, FILENAME }) } : null;
const traverseDirs = source =>
    readdirSync(source)
        .map(name => join(source, name))
        .filter(isDirectory)
        .map(processDir)
        .filter(fileObj => fileObj !== null);

console.table(traverseDirs('./'));
