'use strict';

const app=require("express")();
const fs=require("fs");
const ioredis=require("ioredis");
const https=require("https").createServer({
 key: fs.readFileSync("/www/new/sertificats/or.key"),
 cert: fs.readFileSync("/www/new/sertificats/or.crt") }, app);
const io=require("socket.io")(https);

const redisSubscribe=new ioredis();
const authSocket=require("./backend/socketServer/authorization/authSocket.js");
const apiSocket=require("./backend/socketServer/apiSocket.js");

redisSubscribe.subscribe("logout");

https.listen(10000);


let usersId=[];
let socketsId=[];


io.use((skt, next)=>{
 authSocket(skt, next, usersId, socketsId);
});


io.on("connect", (client)=>{

 redisSubscribe.on("message", (chanal, user)=>{
  apiSocket.auth.logout(io, client, usersId, socketsId, user);
 });


 client.on("myProfileGetBaseData", ()=>{
  apiSocket.myProfile.getBaseData(client, usersId, socketsId);
 });


 client.on("myProfilePublishPost", (message)=>{
  apiSocket.myProfile.publishPost(client, usersId, socketsId, message);
 });


 client.on("myProfileGetTenPosts", ()=>{
  apiSocket.myProfile.getTenPosts(client, usersId,socketsId);
 });



});

