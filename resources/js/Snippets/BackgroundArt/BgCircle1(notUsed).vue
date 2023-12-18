<template>
    <div class="bg-circle rounded-full" :style="styleObject">
    </div>
</template>
<script setup>
	import { ref } from "vue"

	let props = defineProps(['colour','size']);
	let colour = props.colour;
	let size = props.size;

	const styleObject = ref({
								width:size+'px',
								height:size+'px',
								backgroundColor:colour
							});
	let width = "w-[" + size + "px]";
	let height = "h-[" + size + "px]"

</script>

<style scoped>
.bg-circle{
	animation: upDown 10s linear infinite;
}

@keyframes upDown {
	0% {top:0px}
	50% {top: 300px;}
	100% {top:0px}
	
}
</style>