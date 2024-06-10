console.log("This is vishwaks first program...")
console.log("node js is the king....")
// Import the 'fs' module, which stands for 'file system'
const fs = require('fs');

// Define a file path
const filePath = 'example.txt';

// Write to a file
fs.writeFile(filePath, 'Hi my name is jaiguru vishwak', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
});

// Read from a file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading from file:', err);
    return;
  }
  console.log('File content:', data);
});
