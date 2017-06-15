<template>

<div class="row">
<div class="left">
</div>

<div class="center">
<h4>{{ namePage }}</h4>

<div role="navigation">
<textarea v-model="text" placeholder="Введите заметку"></textarea>
</div>
</div>

<div class="right">
<div role="list">

<div role="listitem">
<button v-on:click="publishPost">Оставить</button>
</div>

<div role="listitem">
<button>Смайлики</button>
</div>
</div>
</div>
</div>
</template>

<script>

import { mapState } from 'vuex';

module.exports={
 data: function(){
  return { text: "" };
 },

 computed: mapState({
  namePage: state => state.myProfile.namePage,
  user: state => state.myProfile.user
 }),

 methods: {
  publishPost: function(){
   let post=Object.assign(this.user, { text: this.text});

  alert(JSON.stringify(post));

   this.$socket.emit("myProfilePublishPost", post);
   this.text="";
  }
 }
};
</script>
