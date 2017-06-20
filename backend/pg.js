'use strict';

const pgPool=require("pg-pool");
const pg=new pgPool({
 user: "odra",
 password: "123",
 host: "localhost",
 database: "odra",
 max: 20,
 min: 10,
 idleTimeoutMillis: 1000
});

module.exports=pg;
