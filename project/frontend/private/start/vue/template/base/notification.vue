<template>

<div role="notification">
<div v-if="text">{{ text }}</div>
</div>

</template>

<script>
import { mapState } from 'vuex';

module.exports={
 computed: mapState({
  text: state => state.base.notifications
 })
};
</script>
