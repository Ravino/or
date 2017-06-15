
'use strict';

const jwt=require("jsonwebtoken");
const fs=require("fs");
const secretKey=fs.readFileSync("/www/new/sertificats/jwt.key");


module.exports=function (skt, next, usersId, socketsId){

 const req=skt.request;
 let jwtoken;

 if(req._query && req._query.jwt){
  jwtoken=req._query.jwt;
 }

 else if(req.query && req.query.jwt){
  jwtoken=req.query.jwt;
 }

else {
  skt.emit("auth", {status: "204"});
  skt.disconnect();
  return false;
 }


 jwt.verify(jwtoken, secretKey, (err, verifyToken)=>{
  if(err) {
   skt.emit("auth", {status: "400"});
   skt.disconnect();
   return false;
  }


  if(!usersId[verifyToken.userId]){
   usersId[verifyToken.userId]={
   	 auth: true,
    socketId: [skt.id],
    userId: verifyToken.userId,
    login: verifyToken.login,
    name: verifyToken.name,
    lastName: verifyToken.lastName
   };

   socketsId[skt.id]={ userId: verifyToken.userId };
  }

  else{
   usersId[verifyToken.userId].socketId.push(skt.id);
   socketsId[skt.id] = { userId: verifyToken.userId };
  }


  skt.emit("auth", { status: "200" });
  return next();
 });
};
