'use strict';

module.exports=(io, socket, usersId, socketsId, user)=>{

 try {

  user=JSON.parse(user);
  if(usersId[user.id] && usersId[user.id].login==user.login){

   usersId[user.id].socketId.forEach((item)=>{

    if(io.sockets.sockets.item){
     io.sockets.sockets.item.disconnect();
    }

    delete socketsId[item];
   });

   delete usersId[user.id];
  }
 }

 catch(err){
  console.log(err);
 }
};
