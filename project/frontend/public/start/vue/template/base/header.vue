<template>
<div role="banner">
<h1>{{ text }}</h1>
</div>
</template>

<script>
module.exports={
	props: ['text']
	};
</script>

<style scoped>
div {
 text-align: center;
}

div > h1 {
 text-align: center;
}
</style>
