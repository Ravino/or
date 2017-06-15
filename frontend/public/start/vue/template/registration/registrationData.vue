<template>
<div role="navigation">

<div role="form">
<div class="row">
<div class="left">
</div>

<div class="center1">
<label for="login" id="label-login"><span>Логин</span></label>
<br />
<span>Может содержать любые символы, кроме пробельных.</span>

<div>
<input type="login" v-model="registration.login" v-on:input="checkLogin" placeholder="Введите логин" id="login" autofocus />
</div>

<span aria-live="assertive">{{ error.login }}</span>
<br />
</div>


<div class="center2">

<label for="secret" id="label-secret"></span>Секретный ключ</span></label>
<br />
<span>Может содержать любые символы, кроме пробельных.</span>

<div>
<input type="text" v-model="registration.secret" v-on:input="checkSecret" placeholder="Введите свой секретный ключ" id="secret" />
</div>

<span aria-live="assertive">{{ error.secret }}</span>
<br />
</div>

<div class="right">
</div>
</div>

<div class="row">
<div class="left">
</div>

<div class="center1">
<label for="password" id="label-password"><span>Пароль</span></label>
<br />
<div>
<input type="checkbox" v-on:click="checkOnMascPassword" :checked="input.checkOnMascPassword.checked" />Скрыть пароли</div>


<div v-if="input.checkOnMascPassword.checked == true">
<input type="password" v-model="registration.password" v-on:input="checkPassword" placeholder="Введите пароль" id="password" />
</div>

<div v-else>
<input type="text" v-model="registration.password" v-on:input="checkPassword" placeholder="Введите пароль" id="password" />
</div>

<span aria-live="assertive">{{ error.password }}</span>
<br />
</div>

<div class="center2">
<label for="password2" id="label-password2"><span>Повторите пароль</span></label>
<br />
<span>Может содержать любые символы, кроме пробельных.</span>

<div  v-if="input.checkOnMascPassword.checked == true">
<input type="password" v-model="registration.password2" v-on:input="checkPassword2" placeholder="Введите пароль повторно" id="password2" />
</div>

<div v-else>
<input type="text" v-model="registration.password2" v-on:input="checkPassword2" placeholder="Введите пароль повторно" id="password2" />
</div>

<span aria-live="assertive">{{ error.password2 }}</span>
<br />
</div>

<div class="right">
</div>
</div>

<div class="row">
<div class="left">
</div>

<div class="center1">
<label for="name" id="label-name"><span>Имя</span></label>
<br />
<span>Может содержать любые символы, кроме пробельных.</span>

<div>
<input type="name" v-model="registration.name" v-on:input="checkName" placeholder="Введите имя" id="name" />
</div>

<span aria-live="assertive">{{ error.name }}</span>
<br />
</div>

<div class="center2">
<label for="lastname" id="label-lastname"><span>Фамилия</span></label>
<br />
<span>Может содержать любые символы, кроме пробельных.</span>

<div>
<input type="text" v-model="registration.lastName" v-on:input="checkLastName" placeholder="Введите фамилию" id="lastname" />
</div>

<span aria-live="assertive">{{ error.lastName }}</span>
<br />
</div>

<div class="right">
</div>
</div>


<div class="row">
<div class="left">
</div>


<div class="center1">
<div>
<router-link :to="path.url" tag="div">
<input type="button" :value="path.name" />
</router-link>
</div>
</div>

<div class="center2">

<div>
<input type="button" v-on:click="onRegistration" value="Далее >>" />
</div>
</div>

<div class="right">
</div>
</div>
</div>
</div>
</template>

<script>
module.exports={
 data: function(){
  return {
   path: {
   url: "/",
    name: "<< Назад"
   },

   input: {
    checkOnMascPassword: { checked: true }
   },

   registration: {
    login: "",
    secret: "",
    password: "",
    password2: "",
    name: "",
    lastName: ""
   },

   error: {
    login: "",
    secret: "",
    password: "",
    password2: "",
    name: "",
    lastName: ""
   }
  };
 },

 methods: {
  checkOnMascPassword: function(){
   if(this.input.checkOnMascPassword.checked==true){
    this.input.checkOnMascPassword.checked=false;
   }

   else {
    this.input.checkOnMascPassword.checked=true;
   }
  },

  checkLogin: function(){
   if(/^[^\n\r\s]{1,}$/.test(this.registration.login)!==true){
    this.error.login="Логин не верного формата";
   }
  else this.error.login="";
  },
  checkSecret: function(){
   if(/^[^\n\r\s]{1,}$/.test(this.registration.secret)!==true){
    this.error.secret="Уникальный ключ не верного формата";
   }
   else this.error.secret=" ";
  },

  checkPassword: function(){
   if(/^[^\n\r\s]{1,}$/.test(this.registration.password)!==true){
    this.error.password="Пароль не верного формата";
   }
   else this.error.password="";
  },

  checkPassword2: function(){
   if(this.registration.password!==this.registration.password2){
    this.error.password2="Пароли не совпадают";
   }
   else this.error.password2="Пароли совпали";
  },

  checkName: function(){
   if(/^[^\n\r\s]{1,}$/.test(this.registration.name)!==true){
    this.error.name="Имя не верного формата";
   }
   else this.error.name="";
  },

  checkLastName: function(){
   if(/^[^\n\r\s]{1,}$/.test(this.registration.lastName)!==true){
    this.error.lastName="Фамилия не верного формата";
   }
   else this.error.lastName="";
  },

  onRegistration: function(){
   if(/^[^\n\r\s]{1,}$/.test(this.registration.login)!==true){
    alert("Вы не ввели логин");
    return;
   }
   else if(/^[^\n\r\s]{1,}$/.test(this.registration.secret)!==true){
    alert("Вы не ввели уникальный секретный ключ");
    return;
   }
   else if(/^[^\n\r\s]{1,}$/.test(this.registration.password)!==true){
    alert("Вы не ввели пароль");
    return;
   }
   else if(/^[^\n\r\s]{1,}$/.test(this.registration.password2)!==true){
    alert("Вы не ввели пароль повторно");
    return;
   }
   else if(/^[^\n\r\s]{1,}$/.test(this.registration.name)!==true){
   alert("Вы не ввели своё имя");
    return;
   }
   else if(/^[^\n\r\s]{1,}$/.test(this.registration.lastName)!==true){
    alert("Вы не ввели свою фамилию");
    return;
   }

   this.$http.post("/registration", { register: this.registration}).then((responce)=>{
    if(responce.body.error){
    if(responce.body.error.login){
     this.error.login=responce.body.error.login;
     return;
    }

    else if(responce.body.error.secret){
     this.error.secret.responce.error.secret;
     return;
    }

    else if(responce.body.error.password){
     this.error.password=responce.body.error.password;
     return;
    }

    else if(responce.body.error.password2){
     this.error.password2=responce.body.error.password2;
     return;
    }

    else if(responce.body.error.name){
     this.error.name=responce.body.error.name;
     return;
    }

    else if(responce.body.error.lastName){
     this.error.lastName=responce.body.error.lastName;
     return;
    }
    }


    if(responce.body.status=="success"){
      location.href="/#/";
     return;
    }

    else{
     let statusConfirm=confirm("Системная ошибка при регистрации. Желаете сообщить в поддержку?");
     if(statusConfirm){
      location.href="/#/support";
     }

     else {
      location.href="/#/";
     }
    }
   });

  }
 }
};
</script>


<style scoped>
.row, .center-button {
 display: flex;
 justify-content: space-around;
 align-items: center;
}

.left, .center1, .center2, .right {
 flex-basis: 25%;
 text-align: center;
 align-items: center;
}

.center {
 flex-basis: 50%;
 text-align: center;
 align-items: center;
}

input {
 min-width: 24%;
 max-width: 24%;
 text-align: center;
}

</style>
