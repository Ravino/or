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
<registration-data />
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
   namePage: "Страница регистрации"
  };
 },

 components: {
  "header-page": require("./base/header.vue"),
  "registration-data": require("./registration/registrationData.vue"),
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

.left, .right, .center1, .center2 {
 flex-basis: 25%;
 text-align: center;
}

.center {
 flex-basis: 50%;
 text-align: center;
}
</style>
