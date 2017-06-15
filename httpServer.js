'use strict';

const path=require("path");
const fs=require("fs");
const app=require("express")();
const serveStatic=require("serve-static");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const session=require("express-session");


const registration=require("./backend/httpServer/registration/registration.js");
const passport=require("./backend/httpServer/authorization/passport.js");
const authenticateStrategy=require("./backend/httpServer/authorization/authenticateStrategy.js");
const https=require("https").createServer({key: fs.readFileSync("/www/new/sertificats/or.key"),  cert: fs.readFileSync("/www/new/sertificats/or.crt")}, app);


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({ secret: "fuck", resave: true, saveUninitialized: true}));
app.use(serveStatic("./"));

app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res)=>{
 if(req.isAuthenticated()){
  res.sendFile(__dirname+"/html/private.htm");
 }

 else {
  res.sendFile(__dirname+"/html/public.htm");
 }
});


app.post("/registration", (req, res)=>{
 if(req.isAuthenticated()){
  res.redirect("/");
 }

 else {
  registration(req, res);
 }
});


app.post("/authorization/local", (req, res, next)=>{

 if(req.isAuthenticated()){
  res.redirect("/");
 }

 else {
  authenticateStrategy.local(req, res, next, passport);
 }
});


app.get("/authorization/jwt", (req, res)=>{
 authenticateStrategy.jwtGeneration(req, res);
});

app.get("/logout",(req, res)=>{

 if(req.isAuthenticated()){
  authenticateStrategy.logout(req, res);
 }

 else {
  res.redirect("/");
 }
});


https.listen(3000);

