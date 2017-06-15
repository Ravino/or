'use strict';

const ioredis=require("ioredis");
const redis=new ioredis();



redis.set("fuck", true).then((res)=>{
console.log(res);
});
