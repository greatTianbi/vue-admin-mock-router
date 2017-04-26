<template>
	<div id="app">
		<transition 
			name="fade"
		    mode="out-in"
		>
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	}
}

</script>

<style scoped>
	body {
		margin: 0px;
		padding: 0px;
  }
</style>