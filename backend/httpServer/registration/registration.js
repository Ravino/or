'use strict';


const crypto=require("crypto");
const htmlSpecialChars=require("htmlspecialchars");
const db=require("../db.js");


module.exports=(req, res)=>{

 if(req.body.register.login && /^[^\n\r\s]{1,}$/.test(req.body.register.login)){

  let login=htmlSpecialChars(req.body.register.login);
  db.query("select userid from users where (login = $1::text)", [login], (err, regLogin)=>{
   if(err) throw err;
   if(!regLogin[0]){

    if(req.body.register.secret && /^[^\n\r\s]{1,}$/.test(req.body.register.secret)){

     if(req.body.register.password && /^[^\n\r\s]{1,}$/.test(req.body.register.password)){
      if(req.body.register.password==req.body.register.password2){

       if(req.body.register.name && /^[^\n\r\s]{1,}$/.test(req.body.register.name)){
        if(req.body.register.lastName && /^[^\n\r\s]{1,}$/.test(req.body.register.lastName)){

         let secret=crypto.createHash("sha512").update(req.body.register.secret+login+"secret"+"or").digest("hex");
         let password=crypto.createHash("sha512").update(req.body.register.password+secret+"password"+"or").digest("hex");
         let name=htmlSpecialChars(req.body.register.name);
         let lastname=htmlSpecialChars(req.body.register.lastName);

         db.query("insert into users (login, secret, password, name, lastname) values($1::text, $2::text, $3::text, $4::text, $5::text)", [login, secret, password, name, lastname], (err)=>{
          if(err){
           res.json({status: "systemError2"});
           throw err;
          }

          else {
           res.json({ status: "success"});
          }
         });
        }

        else{
         res.json({ error: { lastName: "Фамилия не верного формата!"}});
        }
       }

       else{
        res.json({ error: { name: "Имя не верного формата!"}});
       }
      }

      else{
       res.json({ error: { password2 : "Пароли не совпадают!" }});
      }
     }

     else{
      res.json({ error: { password: "Пароль не верного формата!" }});
     }
    }

    else {
     res.json({ error: { secret: "Секретный ключ не  верного формата!" }});
    }
   }

    else {
    res.json({ error: { login: "Введённый вами логин занят!" }});
   }
  });
 }

else{
  res.json({ error: { login: "Логин не верного формата!" }});
 }
};
