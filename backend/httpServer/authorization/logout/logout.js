'use strict';

const ioredis=require("ioredis");
const redisPublish=new ioredis();


module.exports=(req, res)=>{

 let user={
  id: req.user.userId,
  login: req.user.login
 };

 user=JSON.stringify(user);

 redisPublish.publish("logout", user);

 req.logout();
 res.json({ status: true });

};
