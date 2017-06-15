<template>
<div>
<div class="row">
<div class="left">
</div>

<div class="center">
<header-page :text="namePage" />
</div>

<div class="right">
</div>
</div>
<div class="row">
<div class="left">
</div>

<div class="center">
//news
</div>

<div class="right">
<form-authorization />
</div>
</div>

<div class="row">
<div class="left">
</div>

<div class="center">
<footer-page />
</div>

<div class="right">
</div>
</div>
</div>

</template>

<script>
module.exports={
 data: function(){
  return {
   namePage: "Добро пожаловать"
  };
 },

 components: {
  "header-page": require("./base/header.vue"),
  "form-authorization": require("./index/authorization.vue"),
  "footer-page": require("./base/footer.vue")
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
