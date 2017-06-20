<template>
<div v-if="posts[0]">
<div class="row" v-for="(post, indexPost) in posts" :id="post.postid" :key="post.postid">
<div class="left">
</div>

<div class="right">
<div>
<router-link :to="'/' + post.userid">{{ post.name + " " + post.lastname }}</router-link>
</div>

<div>
<img :src="post.avatarurl" :alt="post.avataralt" />
</div>
</div>

<div class="center2">
<div>
<time>{{ post.timepublish }}</time>

<blockquote v-model="actionWithPost.newValue" :contenteditable="post.contenteditable">{{ post.textpost }}</blockquote>

</div>
</div>


<div class="center1">

<div>
<a href="#" v-on:click="deletePost(indexPost, post.postid, post.userid)">
<input type="image" alt="Удалить" />
</a>
</div>

<div>
<a href="#" v-on:click="updatePost(indexPost, post.postid, post.userid)">{{ actionWithPost.name }}</a>
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
</div>

<div class="right">
</div>
</div>
</div>
</template>


<script>

import moment from 'moment';
import { mapState } from 'vuex';

moment.locale("ru");

module.exports={
 data: function(){
  return {
   actionWithPost: {
    name: "Редактировать",
    newValue: ""
   }
  };
 },

 created: function(){
  this.$socket.emit("myProfileGetTenPosts");
 },

 sockets: {

  myProfileGetTenPosts: function(message){
   let updatePosts=[];

   message.forEach(function(i){
    i.timepublish = moment(i.timepublish).format("dddd, DD MMMM YYYY, в HH:mm");
    i.contenteditable=false;
    updatePosts.push(i);
   });

   this.$store.commit("myProfile/setGetTenPosts", updatePosts);
  },

  myProfileAddBeginPost: function(message){
   message.timepublish=moment(message.timepublish).format("dddd, DD MMMM YYYY, в HH:mm");
   message.contenteditable=false;
   this.$store.commit("myProfile/addBeginPost", message);
  },

  myProfileAddEndPosts: function(message){
   this.$store.commit("myProfile/addEndPosts", message);
  }
 },


 computed: mapState({
  posts: state => state.myProfile.posts
 }),


 methods: {

  updatePost: function(indexPost, postid, userid){

   let updateContenteditablePost={
    checked: null,
    "indexPost": indexPost
   };

   if(this.posts[indexPost].contenteditable==false){
    updateContenteditablePost.checked=true;
    this.$store.commit("myProfile/updateContenteditablePost", updateContenteditablePost);
    this.actionWithPost.name="Сохранить";
   }

   else {

    alert(this.actionWithPost.newValue);

    updateContenteditablePost.checked=false;
    this.$store.commit("myProfile/updateContenteditablePost", updateContenteditablePost);
    this.actionWithPost.name="Редактировать";
   }

  },

  deletePost: function(indexPost, postid, userid){

   let delPost={
    "postid": postid,
    "userid": userid
   };

   this.$socket.emit("myProfileDeletePost", delPost);
   this.$store.commit("myProfile/deletePost", indexPost);

  }
 }
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

.center1 {
 flex-basis: 10%;
 order: 1;
 text-align: center;
}

.center2 {
 flex-basis: 40%;
 order: 2;
 text-align: center;
}

.left {
 order: 0;
}

.right {
 order: 3;
}

</style>
