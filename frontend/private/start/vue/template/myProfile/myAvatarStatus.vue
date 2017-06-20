<template>

<div class="row">

<div class="left">
<div>
<img src="avatarurl" :alt="avataralt" />
</div>


<div v-if="loaderPhoto.open==true">
<input type="file" id="loaderPhoto" />
</div>

<div v-else>
<a href="#" v-on:click="openLoaderPhoto">Заменить аватар</a>
</div>
</div>

<div class="right">
my status
</div>

</div>
</template>


<script>

import { mapState } from 'vuex';

module.exports={
 data: function(){
  return {
   loaderPhoto: {
    open: false
   }
  };
 },

 computed: mapState({
  avataralt: state => state.myProfile.user.avatarurl
 }),

 methods: {
  openLoaderPhoto: function(){
   this.loaderPhoto.open=true;
  }
 }

};
</script>


<style scoped>
.row {
 display: flex;
 justify-content: spase-around;
 text-align: center;
 align-items: center;
}

.left {
 flex-basis: 35%;
 min-width: 35%;
 max-width: 35%;
 min-height: 40%;
 max-height: 40%;
overflow: auto;
}

.right {
 flex-basis: 15%;
 min-width: 15%;
 max-width: 15%;
 min-height: 40%;
 max-height: 40%;
 overflow: auto;
}

img {
 min-width: 35%;
 max-width: 35%;
 image-rendering: crisp-edges;
}
</style>
