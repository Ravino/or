<template>

<div class="row">

<div class="left">
<img src="avatarurl" :alt="avataralt" />
</div>

<div class="right">
my status
</div>

</div>
</template>


<script>

import { mapState } from 'vuex';

module.exports={
 computed: mapState({
  avataralt: state => state.myProfile.user.avatarurl
 })
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
