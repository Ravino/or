'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueSocketio from 'vue-socket.io';
import VueResource from 'vue-resource';

import io from "socket.io-client";

let jwt=localStorage.getItem("jwt");


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueSocketio, io("https://localhost:10000?jwt="+jwt, { transports: ['websocket'] }));
Vue.use(VueResource);



const store=new Vuex.Store(require("./vue/includeStore.js"));


const router=new VueRouter({
 mode: "history",
 routes: [
  { path: "/", component: require("./vue/template/myProfile.vue") }
 ]
});


new Vue({
 el: "#page",
 store: store,
 router: router,
 sockets: {
  connect: function(){
   this.$store.commit("base/updateConnect", true);
  },
  auth: function(message){
   if(message.status==200){
    this.$store.commit("base/updateNotifications", "Соединение установлено");
    setTimeout(()=>{
     this.$store.commit("base/updateNotifications", "");
    }, 5000);
  }
  }
 }

});
