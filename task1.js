/* 
This task implies that you should parse this JSON file and output the value of "name", "price", "tags", "createdAt" for each object. 
And then from this data to build a new JSON file with only the values: "name", "price", "tags", "createdAt". 
*/

import fs from 'fs';

const sampleJson = JSON.parse(fs.readFileSync('./sample-file.json').toString());

const targetProperties = ['name', 'price', 'tags', 'createdAt'];

const newJson = sampleJson.users.map((item) => {
  const newItem = {};
  for (const key of targetProperties) {
    console.log(item[key]);
    newItem[key] = item[key];
  }
  return newItem;
});

// it is not clear from the task description, where to output 
console.log(JSON.stringify(newJson));

fs.writeFileSync('./output.json', JSON.stringify(newJson));