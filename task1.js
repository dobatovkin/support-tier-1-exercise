/* 
This task implies that you should parse this JSON file and output the value of "name", "price", "tags", "createdAt" for each object. 
And then from this data to build a new JSON file with only the values: "name", "price", "tags", "createdAt". 
*/

// import file system node module
import fs from 'fs';

// read sample and convert from buffer to string
const sampleJson = JSON.parse(fs.readFileSync('./sample-file.json').toString());

// specify keys to iterate on
const targetProperties = ['name', 'price', 'tags', 'createdAt'];

// use map to both reconstruct and output props
const newJson = sampleJson.users.map((item) => {
  const newItem = {};
  for (const key of targetProperties) {
    console.log(item[key]);
    newItem[key] = item[key];
  }
  return newItem;
});

// output destination is not clear from the task description, so i've included both
console.log(JSON.stringify(newJson));

fs.writeFileSync('./output.json', JSON.stringify(newJson));