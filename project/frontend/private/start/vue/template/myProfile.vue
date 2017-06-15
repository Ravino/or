<template>

<div>
<div class="row">

<div class="left">
</div>

<div class="center">
<header-page :text="namePage" />
</div>

<div class="right">
<notification-page />
</div>

</div>


<div class="row">

<div class="left">
</div>

<div class="center">
<my-avatar-status />
</div>

<div class="right">
<menu-page />
</div>
</div>

<div>
<form-post />
</div>

<div>
<list-posts />
</div>
</div>
</template>

<script>

import { mapState } from "vuex";

module.exports={
 created: function(){
  this.$socket.emit("myProfileGetBaseData");
 },

 sockets: {
  myProfileGetBaseData: function(message){
   this.$store.commit("myProfile/updateUser", message);
  },

  errorMyProfile: function(message){
   alert(JSON.stringify(message));
  }
 },
 computed: mapState({
  namePage: state => state.myProfile.namePage
 }),
 components: {
  "header-page": require("./base/header.vue"),
  "notification-page": require("./base/notification.vue"),
  "my-avatar-status": require("./myProfile/myAvatarStatus.vue"),
  "menu-page": require("./base/menu.vue"),
  "form-post": require("./myProfile/formPost.vue"),
  "list-posts": require("./myProfile/listPosts.vue")
 }
};
</script>


<style scoped>

.row {
 display: flex;
 justify-content: spase-around;
 align-items: center;
}

.left, .right {
 flex-basis: 25%;
 text-align: center;
 align-items: center;
}

.center {
 flex-basis: 50%;
 text-align: center;
 align-items: center;
}
</style>
