const http=require('http');
const app=require('./back-end/app');


const server= http.createServer(app);


// const port=PORT;
server.listen(3000,()=>console.log('listen output at 192.168.100.5:3000'));


