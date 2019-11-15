const http=require('http');
const app=require('./back-end/app');


const server= http.createServer(app);


// const port=PORT;
server.listen(4200,()=>console.log('listen output at localhost:4200'));


