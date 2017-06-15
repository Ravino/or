'use strict';

const db=require("../../db.js");
const htmlSpecialChars=require("htmlspecialchars");
const crypto=require("crypto");
const localStrategy=require("passport-local").Strategy;


module.exports=new localStrategy({ usernameField: "login", passwordField: "password" }, (login, password, done)=>{
 if(login && /^[^\n\r\s]{1,}$/.test(login)){
  if(password && /^[^\n\r\s]{1,}$/.test(password)){

   const authLogin=htmlSpecialChars(login);
   db.query("select userid, login, password, secret, name, lastname from users where (login = $1::text)", [authLogin], (err, authDataUser)=>{
    if(err) {

     done(null, false, {message: {system: "systemError"}});
     throw err;
    }

    if(authDataUser[0]){

     const authPassword=crypto.createHash("sha512").update(password + authDataUser[0].secret+"password" + "or").digest("hex");
     if(authPassword==authDataUser[0].password){

      const sessionUser={
       userId: authDataUser[0].userid,
       login: authDataUser[0].login,
       name: authDataUser[0].name,
       lastName: authDataUser[0].lastname
      };
      return done(null, sessionUser);
     }

     else {
      return done(null, false, { message: {password: "invalid"}});
     }
    }

    else {
     return done(null, false, { message: {login: "notFound" }});
    }
   });
  }

  else {
   return done(null, false, { message: { password: "noFormat"}});
  }
 }

 else {
  return done(null, false, { message: { login: "noFormat" }});
 }
});

