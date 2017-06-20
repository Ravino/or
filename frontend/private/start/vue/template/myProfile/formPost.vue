<template>

<div class="row">
<div class="left">
</div>

<div class="center">
<h4>{{ namePage }}</h4>

<div role="navigation">
<textarea v-model="textpost" placeholder="Введите заметку"></textarea>
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
  return { textpost: "" };
 },

 computed: mapState({
  namePage: state => state.myProfile.namePage,
  user: state => state.myProfile.user
 }),

 methods: {
  publishPost: function(){
   if(this.textpost){
    let post=Object.assign(this.user, { textpost: this.textpost});
    this.$socket.emit("myProfilePublishPost", post);
    this.textpost="";
   }
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

.center {
 flex-basis: 50%;
 text-align: center;
}
</style>
