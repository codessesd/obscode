<template>
  <div class="bgArt fixed top-0 left-0 h-1 w-full filter -z-10" :class="[showHardBlur ? 'blur-filter-50' : 'blur-filter-10']">
    <!-- Circles -->
    <div class="circle-1 absolute rounded-full w-[400px] h-[400px] bg-[#ff0000] top-[50px] left-[100px]"></div>
    <!-- <div class="circle-2 absolute rounded-full w-[600px] h-[600px] bg-[#ff3399] top-[50px] left-[500px]"></div> -->
    <div class="circle-4 absolute rounded-full w-[200px] h-[200px] bg-[#ff00d9] top-[100px] left-[600px]"></div>
    <div class="circle-3 absolute rounded-full w-[300px] h-[300px] bg-[#6933ff] top-[20px] left-[1100px]"></div>

    <!-- Filter -->
    <div class="absolute top-0 left-0 bg-white/70 h-screen w-full">
    </div>
  </div>
</template>
<script setup>
  let props = defineProps({showHardBlur : {type:Boolean, default: false}})
    
</script>
  
<style scoped>
.blur-filter-10{
  filter: blur(0px);
  transition: filter 2s;
}
.blur-filter-50{
  filter: blur(50px);
  transition: filter 2s;
}
.circle-1{
  animation: animation-1 10s ease-in-out infinite;
}
.circle-2{
  animation: animation-2 10s ease-in-out infinite;
}
.circle-3{
  animation: animation-3 15s linear infinite;
}
.circle-4{
  animation: animation-4 8s ease-in-out infinite;
}

@keyframes animation-1 {
  0% {top: 50px;}
  50% {top: 400px;}
  100% {top: 50px;}
}

@keyframes animation-2 {
  0% {top: 50px;}
  25% {top: 0px;}
  50% {top: 200px;}
  100% {top: 50px;}
}
@keyframes animation-3 {
  0% {top: 20px;}
  50% {top: 400px;}
  100% {top: 20px;}
}
@keyframes animation-4 {
  0% {top: 100px;}
  50% {top: 150px;}
  100% {top: 100px;}
}
/* @keyframes animation-5 {
  0% {top: 100px;transform: scale(0)}
  10% {transform: scale(1)}
  25% {top: 150px;transform: scale(1)}
  50% {top: 100px;transform: scale(1)}
  75% {top: 400px; transform: scale(1)}
  80%{transform: scale(0)}
  100% {top: 100px; transform: scale(0)}
} */
</style>