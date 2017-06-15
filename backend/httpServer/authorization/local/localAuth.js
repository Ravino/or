'use strict';

module.exports=(req, res, next, passport)=>{

 passport.authenticate("local", (err, user, info)=>{

  if(err) {
   console.log(err);
   return next(err);
  }

  if(!user) {
   return res.json(info.message);
  }


  req.logIn(user, (err)=>{
   if(err){
    console.log("logIn "+err);
    return next(err);
   }


   return res.redirect("/authorization/jwt");
  });
 })(req, res, next);
};
