const http=require('http');
const app=require('./back-end/app');
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'});



const server= http.createServer(app);

const port=process.env.PORT*1 ||4200;
server.listen(port,()=>console.log('listen output at localhost:4200'));


