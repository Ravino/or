'use strict';

const htmlSpecialChars=require("htmlspecialchars");


module.exports=(db, socket, usersId, socketsId)=>{

 if(socketsId[socket.id]){
  const user={};
  user.id=socketsId[socket.id].userId;
  user.login=usersId[user.id].login;


  db.query("select posts.postid, posts.userid, users.login, users.name, users.lastname, posts.textpost, posts.timepublish from posts inner join users on(users.userid=posts.userid) where (users.userid = $1::int) and (posts.userid = $2::int) order by (posts.postid) desc limit (10)", [user.id, user.id], (err, myProfileGetTenPosts)=>{
   if(err) {
    console.log(err);
    socket.emit("myProfileGetTenPostsError", { status: 400 });
    return;
   }


   if(!myProfileGetTenPosts.rows && !myProfileGetTenPosts.rows[0]) {
    socket.emit("myProfileGetTenPostsError", { status: 404 });
   }

   else {

    socket.emit("myProfileGetTenPosts", myProfileGetTenPosts.rows);
   }
  });
 }

 else {
  socket.emit("myProfileGetTenPostsError", { status: 204});
 }
};
