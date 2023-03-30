const fs=require('fs')
const { loadavg } = require('os')
// const book={
//     title:'Ponnyin Selvan',
//     author:'Kalki'
// }
// const bookJSON=JSON.stringify(book)

// fs.writeFileSync('1-Json.json',bookJSON)
// // console.log(bookJSON);


// // const parsedData=JSON.parse(bookJSON)
// // // console.log(parsedData.author);
// const databuffer=fs.readFileSync('1-Json.json')
// const dataJSON=databuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title);
const databuffer=fs.readFileSync('1-Json.json')
const dataJSON=databuffer.toString()
const user=JSON.parse(dataJSON)

user.name="Ajay"
user.age=30
const userJSON=JSON.stringify(user)
fs.writeFileSync('1-JSON.json',userJSON)