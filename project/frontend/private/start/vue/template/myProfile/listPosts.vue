<template>
<div v-if="!posts==null">
<div class="row" v-for="post in posts" :id="post.postid">
<div class="left">
</div>

<div class="center">
<q>{{ post.textpost }}</q>
<time>{{ post.timepublish }}</time>
</div>

<div class="right">
<a :href="post.userid"><span>{{ post.name+" "+post.lastname }}</span></a>

<div>
<img :src="post.avatarurl" :alt="post.avataralt" />
</div>
</div>
</div>
</div>
</div>

<div v-else>
<div class="row">
<div class="left">
</div>

<div class="center">
Записей нет
{{ posts}}
</div>

<div class="right">
</div>
</div>
</div>
</template>


<script>

import { mapState } from 'vuex';

module.exports={
 created: function(){
  this.$socket.emit("myProfileGetTenPosts");
 },

 sockets: {
  myProfileGetTenPosts: function(message){
   this.$store.commit("myProfile/updatePosts", message);
  },

  myProfileAddBeginPost: function(message){
   this.$store.commit("myProfile/addBeginPost", message);
  },
  myProfileAddEndPosts: function(message){
   this.$store.commit("myProfile/addEndPosts", message);
  }
 },

 computed: mapState({
  posts: state => state.myProfile.posts
 })
};
</script>


<style scoped>
.row {
 display: flex;
 justify-content: space-around;
 align-items: center;
}

.left, .right {
 flex-basis: 25%;
 text-align: center;
}

.center {
 flex-basis: 50%;
 text-align: center;
}

</style>
