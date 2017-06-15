'use strict';

const pgNative=require("pg-native");
const pg=new pgNative();

pg.connectSync("postgresql://odra:123@127.0.0.1/odra");

module.exports=pg;

