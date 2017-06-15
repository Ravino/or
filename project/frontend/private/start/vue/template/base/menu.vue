<template>

<div role="navigation">
<div role="list">

<div role="listitem" v-for="item in menuList">
<router-link :to="item.path">{{ item.name }}</router-link>
</div>
<div role="listitem">
<a href="#" v-on:click="logout">Выйти</a>
</div>
</div>
</div>
</template>

<script>
module.exports={
 data: function(){
  return {
   menuList: [
    { path: "/", name: "Профиль" },
    { path: "/settings", name: "Настройки" }
   ]
  };
 },
 methods: {
  logout: function(){
   this.$http.get("/logout").then((response)=>{
    if(response.body.status==true){

     location.href="/";
    }
   });
  }
 }
};
</script>
