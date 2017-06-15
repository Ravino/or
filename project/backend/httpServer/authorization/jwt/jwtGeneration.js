'use strict';

const jwt=require("jsonwebtoken");
const fs=require("fs");
const secretKey=fs.readFileSync("/www/new/sertificats/jwt.key");

module.exports = (req, res)=>{
 if(req.user){

  jwt.sign(req.user, secretKey, (err, token)=>{
   if(err) throw err;

   if(token) {
    res.json({ status: true, authToken: token });
   }
  });
 }
};
