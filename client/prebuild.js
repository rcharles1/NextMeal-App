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

// Function to create directories and files if they don't exist
const ensureFileExists = (filePath, defaultContent = '') => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
    }
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, defaultContent, 'utf8');
        console.log(`Created file: ${filePath}`);
    }
};

// Update mongodb index.js file
updateFileContent(mongodbFilePath, /require\('fs\/promises'\)/g, 'null');

// Ensure the empty.js file exists
ensureFileExists(emptyJsFilePath, 'module.exports = {};');

// Additional check for the ENOTDIR error
const promisesPath = path.join(emptyJsFilePath, 'promises');
if (fs.existsSync(promisesPath)) {
    console.log(`Path exists: ${promisesPath}`);
} else {
    console.error('Path does not exist:', promisesPath);
    // Attempt to fix the path issue by creating a dummy file
    ensureFileExists(promisesPath, '');
}