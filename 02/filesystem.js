var fs = require('fs');

// 
// 
// Reading File 

// Asynchronusly
fs.readFile('message.txt', (err, data) => {
  if (err)
    throw err;
  console.log('Reading File Asynchronusly: ' + data);
});

// Synchronusly
var content = fs.readFileSync('message.txt');
console.log('Reading File Synchronusly: ' + content);

// 
// 
// Writing File

// Asynchronusly
fs.writeFile('messageWritten.txt', 'Jesslyn gendats!', (err) => {
  if (err)
    throw err;
  console.log("It's saved asynchronously!");
})

// Synchronusly
fs.writeFileSync('messageWritten2.txt', 'NoOOB n00b');
console.log("File written synchronously successfuly");

// 
// 
// Append File

// Asynchronusly
fs.appendFile('messageWritten.txt', 'This text will be appended in the last line', (err) => {
  if (err)
    throw err;
  console.log('The new content asynchronously was added');
});

// Synchronusly
fs.appendFileSync('messageWritten2.txt', 'WAHWAHAHWHAHAHAH');
console.log('File appended synchronously successfully!');

// 
// 
// Rename File

// Asynchronus
fs.rename('messageWritten.txt', 'new_messageWritten.txt', (err) => {
  if (err)
    throw err;
  console.log('The Renaming asynchronusly successfuly');
})

// Synchronus
fs.renameSync('messageWritten2.txt', 'new_messageWritten2.txt')
console.log('The rename synchronus success');

// 
// 
// Delete File

// Asynchronus
fs.unlink('new_messageWritten.txt', (err) => {
  if (err)
    throw err;
  console.log('File delete asynchronously successfully!');
});

// Synchronous
fs.unlinkSync('new_messageWritten2.txt');
