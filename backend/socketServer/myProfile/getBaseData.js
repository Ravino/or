'use strict';

const htmlSpecialChars=require("htmlspecialchars");

module.exports=(db, socket, usersId, socketsId)=>{

 if(socketsId[socket.id]){
  const user={};
user.id=socketsId[socket.id].userId;
  user.login=usersId[user.id].login;

  db.query("select userid, login, name, lastname, avatarurl from users where ( userid = $1::int)", [user.id], (err, myBaseDataProfile)=>{
   if(err) {
    socket.emit("myProfileGetBaseDataError", { status: 400 });
    throw err;
  }


   if(!myBaseDataProfile.rows[0]) {
    socket.emit("myProfileGetBaseDataError", { status: 404 });
   }

   else {
    socket.emit("myProfileGetBaseData", myBaseDataProfile.rows[0]);
   }
  });
 }

 else {
  socket.emit("myProfileGetBaseDataError", { status: 204});
 }
};
