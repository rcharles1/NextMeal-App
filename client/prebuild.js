import fs from 'fs';
import path from 'path';

const isVercel = process.env.VERCEL === '1';
const filePath = isVercel 
    ? path.resolve('/vercel/path0/client/node_modules/mongodb/lib/index.js')
    : path.resolve('client', 'node_modules', 'mongodb', 'lib', 'index.js');

if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const updatedContent = fileContent.replace(/require\('fs\/promises'\)/g, 'null');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log('Removed problematic imports from index.js');
} else {
    console.error('File does not exist:', filePath);
}