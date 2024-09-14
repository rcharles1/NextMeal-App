import fs from 'fs';
import path from 'path';

const isVercel = process.env.VERCEL === '1';

// Paths for the problematic files
const mongodbFilePath = isVercel 
    ? path.resolve('/vercel/path0/client/node_modules/mongodb/lib/index.js')
    : path.resolve('client', 'node_modules', 'mongodb', 'lib', 'index.js');

const emptyJsFilePath = isVercel 
    ? path.resolve('/vercel/path0/client/node_modules/node-stdlib-browser/esm/mock/empty.js')
    : path.resolve('client', 'node_modules', 'node-stdlib-browser', 'esm', 'mock', 'empty.js');

// Function to update file content
const updateFileContent = (filePath, searchValue, replaceValue) => {
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const updatedContent = fileContent.replace(searchValue, replaceValue);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated content in ${filePath}`);
    } else {
        console.error('File does not exist:', filePath);
    }
};

// Update mongodb index.js file
updateFileContent(mongodbFilePath, /require\('fs\/promises'\)/g, 'null');

// Handle the ENOTDIR error by ensuring the path is correct
if (fs.existsSync(emptyJsFilePath) && fs.lstatSync(emptyJsFilePath).isFile()) {
    console.log(`File exists and is a file: ${emptyJsFilePath}`);
} else {
    console.error('File does not exist or is not a file:', emptyJsFilePath);
}