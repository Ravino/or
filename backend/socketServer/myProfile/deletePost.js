'use strict';

module.exports=(db, socket, message)=>{

 if(message && message.postid && message.userid){
  if(/^[0-9]{1,}$/.test(message.postid)==true && /^[0-9]{1,}$/.test(message.userid)==true){

   db.query("delete from posts * where (postid = $1::int) and (userid = $2::int)", [message.postid, message.userid], (err, result)=>{
    if(err){
     console.log(err);
     return;
    }
   });
  }

  else {
   socket.emit("myProfileDeletePostError", { status: 400 });
  }
 }

 else {
  socket.emit("myProfileDeletePost", { status: 404 });
 }
};

