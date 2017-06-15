'use strict';


const db=require("../db.js");
const htmlSpecialChars=require("htmlspecialchars");


module.exports=(socket, usersId, socketsId, message)=>{

 console.log("1");

 if(message.userid && message.login && message.name && message.lastname && message.text){

   console.log("2");

  if(socketsId[socket.id].userId==message.userid){

   console.log("3");

   let post={
    postid: null,
    userid: htmlSpecialChars(message.userid),
   text: htmlSpecialChars(message.text),
    name: htmlSpecialChars(message.name),
    lastname: htmlSpecialChars(message.lastname),
    login: htmlSpecialChars(message.login),
    avatarurl: htmlSpecialChars(message.avatarurl),
    avataralt: htmlSpecialChars(message.avataralt)
   };

console.log("4");


console.log("5");

console.log(post);

   db.query("insert into posts (userid, login, name, lastname, textpost) values($1::int, $2::text, $3::text, $4::text, $5::text) returning postid", [post.userid, post.login, post.name, post.lastname, post.text], (err, idInsertPost)=>{

console.log("6");
    if(err) throw err;

console.log("7");


    post.postid=idInsertPost.postid;
    socket.emit("myProfileAddBeginPost", post);
   });
   }

  else {
  console.log("ne sovpadaet");

    socket.emit("myProfile", { status: "bat get"});
  }
 }

 else {

  socket.emit("myProfile", { status: "not found"});
 }
};
