'use strict';


const db=require("../db.js");
const htmlSpecialChars=require("htmlspecialchars");


module.exports=(socket, usersId, socketsId)=>{

 if(socketsId[socket.id]){
  const user={};
  user.id=socketsId[socket.id].userId;
  user.login=usersId[user.id].login;

//Именно в этом запросе вываливается ошибка и падает сервер sockets

  db.query("select posts.postid, posts.userid, users.login, users.name, users.lastname, posts.textpost, posts.timepublish from posts inner join users on(users.userid=posts.userid) where (users.userid = $1::int) and (posts.userid = $2::int)", [user.id, user.id], (err, myProfileGetTenPosts)=>{
   if(err) {
    socket.emit("myProfileGetTenPostsError", { status: 400 });
    throw err;
  }


   if(!myProfileGetTenPosts[0]) {
    socket.emit("myProfileGetTenPostsError", { status: 404 });
   }

   else {
    console.log(myProfileGetTenPosts);

    socket.emit("myProfileGetTenPosts", myProfileGetTenPosts);
   }
  });
 }

 else {
  socket.emit("myProfileGetTenPostsError", { status: 204});
 }
};
