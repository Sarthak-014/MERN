var http=require('http')
var fs=require('fs')
var os = require('os');

// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.version());

console.log("Normal log");
console.warn("Danger");
console.assert(true,"transaction completed");
console.assert(false,"transaction failed");

const server =http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(JSON.stringify({
//     "id": 2,
//     "title": "Laptop",
//     "price": 70000,
//     }));
// if(req.url=="/HP1"){
//     res.write("This is HP 15S Page");
//     res.end(JSON.stringify({
//         "ID":1,
//         "Name":"HP 15S",
//         "Price":45000,
//     }));
// }
// if(req.url=="/HP2"){
//     res.write("This is HP PAVILION 15 page");
//     res.end(JSON.stringify({
//         "ID":2,
//         "Name":"HP PAVILION 15",
//         "Price":65000
//     }));
// }
// if(req.url=="/HP3"){
//     res.write("This is HP VICTUS page");
//     res.end(JSON.stringify({
//         "ID":3,
//         "Name":"HP VICTUS",
//         "Price":60000
//     }));
// }
if(req.url=="/add"){
    fs.readFile("add.txt",(error,data)=>{
        res.write(data);
        res.end();
    }
)}
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`

