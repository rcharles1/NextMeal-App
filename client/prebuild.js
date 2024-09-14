const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'client', 'node_modules', 'mongodb', 'lib', 'index.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

const updatedContent = fileContent.replace(/require\('fs\/promises'\)/g, 'null');

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Removed problematic imports from index.js');