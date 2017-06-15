<template>
<div role="navigation">

<h2>Форма входа</h2>

<div role="form">

<label id="label-login" for="login"><span>Логин</span></label>

<div>
<input type="text" id="login" v-model="authorization.login" v-on:input="checkLogin" placeholder="Введите логин" />
</div>

<div aria-live="assertive">{{ error.login }}</div>

<br />

<label id="label-password" for="password"><span>Пароль</span></label>

<div>
<input type="password" id="password" v-model="authorization.password" v-on:input="checkPassword" placeholder="Введите пароль" />
</div>

<div aria-live="assertive">{{ error.password }}</div>

<br />

<div>
<input type="submit" id="authorization-button" v-on:click='authorizating' value="Войти" />
</div>

<div>
<router-link :to="path.url">{{ path.name }}</router-link>
</div>

</div>
</div>
</template>


<script>
 module.exports={
 data: function(){
  return {
   path: {
    url: "/registration",
    name: "Зарегистрироваться"
   },
   authorization: {
    login: "",
    password: ""
   },

   error: {
    login: "",
    password: ""
   }
  };
 },

 methods: {
  checkLogin: function(){
   if(this.authorization.login && /^[^\n\r\s]{1,}$/.test(this.authorization.login)){
    this.error.login="";
    return;
   }

   else {
    this.error.login="Логин не верного формата";
    return;
   }
  },

  checkPassword: function(){
   if(this.authorization.password && /^[^\n\r\s]{1,}$/.test(this.authorization.password)){
    this.error.password="";
    return;
   }

   else {
    this.error.password="Пароль не верного формата";
    return;
   }
  },


  authorizating: function(){
   if(/^[^\n\r\s]{1,}$/.test(this.authorization.login)!==true){
    alert("Вы не ввели логин");
    return;
   }

   else if(/^[^\n\r\s]{1,}$/.test(this.authorization.password)!==true){
   alert("Вы не ввели пароль");
    return;
   }


   this.$http.post("/authorization/local", this.authorization).then((response)=>{

    if(response.body.login=="noFormat"){
      this.error.login="Логин не верного формата";
     return;
    }

    else if(response.body.login=="notFound"){
     this.error.login="Логин введён не верно";
     return;
    }

    else if(response.body.password=="noFormat"){
     this.error.password="Пароль не верного формата";
     return;
    }

    else if(response.body.password=="invalid"){
     this.error.password="Пароль введён не верно";
     return;
    }

    if(response.body.status==true && response.body.authToken){
     localStorage.setItem("jwt", response.body.authToken);
     location.href="/";
    }
    else {
     alert("Системная ошибка, попробуйте позже!");
    }
   });
  }
 }
};
</script>
