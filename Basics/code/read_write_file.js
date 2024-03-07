//for reading and writing file we need a module called fs.
const fs=require('fs');

//inside that module we have a method readFileSync that read the file synchronously
/**
 * METHOD TAKE Two argument one is path of the file and another is encoding
 * after reading the file it will return the content.
 */

let content=fs.readFileSync('./files/a.txt','utf-8');
console.log(content);

/***
 * writing the file we have method inside fs writeFileSync
 * 
 * It will write file synchronously 
 * If there's no file then it will create a file first then write inside the file
 * If file has some content it will overwrite the content
 * 
 * writeFileSync has two arugment one is path another is content.
 */
fs.writeFileSync('./files/a.txt',"I am a colorful boy");

