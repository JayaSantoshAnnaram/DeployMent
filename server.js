const http=require('http');
const app=require('./back-end/app');
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'});




const server= http.createServer(app);

const port=process.env.PORT*1 ||3000;
server.listen(port,()=>console.log('listen output at localhost:3000'));


