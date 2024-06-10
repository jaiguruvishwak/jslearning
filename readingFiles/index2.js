import { add , sub , mul , div} from '../calculator/calculator'

// Print initial messages to the console
console.log("Welcome to Vishwak's first Node.js program!");
console.log("Node.js makes file operations easy and fun!");

// Import the 'fs' module, which stands for 'file system'
const fs = require('fs');

// Define a file path
const filePath = 'message.txt';

console.log("Sum of 20 and 30 is:"+ add(20,30));
console.log("sub of 20 and 30 is:"+ sub(20,30));
console.log("mul of 20 and 30 is:"+ mul(20,30));
console.log("div of 20 and 30 is:"+ div(20,30));


// Write to a file
fs.writeFile(filePath, 'Hello, this is a message from Vishwak!', (err) => {
 // if (err) {
   // console.error('Error writing to file:', err);
    //return;
  //}
  console.log('Successfully wrote to the file.');

  
  // Read from a file after writing to ensure the content was saved
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading from file:', err);
      return;
    }
    console.log('The file contains:');
    console.log(data);
  });
});
