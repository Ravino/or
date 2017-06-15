'use strict';

const passport=require("passport");
const localStrategy=require("./local/localStrategy.js");


passport.serializeUser((user, done)=>{
 done(null, user);
});

passport.deserializeUser((user, done)=>{
 done(null, user);
});



passport.use(localStrategy);

module.exports=passport;
