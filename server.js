const http=require('http');
const app=require('./back-end/app');


const server= http.createServer(app);


server.listen(3000,'192.168.100.5',()=>console.log('listen output at 192.168.100.5:3000'));


