'use strict';

const htmlSpecialChars=require("htmlspecialchars");


module.exports=(db, socket, usersId, socketsId, message)=>{

 if(message.userid && message.login && message.name && message.lastname && message.textpost){
  if(socketsId[socket.id].userId==message.userid){

   let post={
    postid: null,
    timepublish: null,
    userid: htmlSpecialChars(message.userid),
   textpost: htmlSpecialChars(message.textpost),
    name: htmlSpecialChars(message.name),
    lastname: htmlSpecialChars(message.lastname),
    login: htmlSpecialChars(message.login),
    avatarurl: htmlSpecialChars(message.avatarurl),
    avataralt: htmlSpecialChars(message.avataralt)
   };


   db.query("insert into posts (userid, textpost) values($1::int, $2::text) returning postid, timepublish", [post.userid, post.textpost], (err, idInsertPost)=>{
    if(err){
     console.log(err);
     return;
    }

    if(idInsertPost.rows[0] && idInsertPost.rows[0].postid && idInsertPost.rows[0].timepublish){
     post.postid=idInsertPost.rows[0].postid;
     post.timepublish=idInsertPost.rows[0].timepublish;
     socket.emit("myProfileAddBeginPost", post);
    }

    else {
     socket.emit("myProfyleAddBeginPostErr", { status: 300 });
    }
   });
   }

  else {
    socket.emit("myProfileAddBeginPostError", { status: 400});
  }
 }

 else {
  socket.emit("myProfileAddBeginPost", { status: 404});
 }
};
