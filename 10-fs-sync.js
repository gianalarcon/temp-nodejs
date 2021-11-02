const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt',{encoding:'utf8', flag:'r'})  
const second = readFileSync('./content/second.txt',{encoding:'utf8', flag:'r'})  

writeFileSync('./content/result-sync-txt',`Here is the result: ${first}, ${second}`,{flag:'a'})

console.log('done with the task')
console.log('starting the next one')
