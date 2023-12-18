<template>
  <div class="bgArt fixed top-0 left-0 h-1 w-full filter -z-10" :class="[showHardBlur ? 'blur-filter-50' : 'blur-filter-10']">
    <!-- Circles -->
    <div class="circle-1 absolute rounded-full bg-[#ff0000] top-[50px]"></div>
    <!-- <div class="circle-2 absolute rounded-full w-[600px] h-[600px] bg-[#ff3399] top-[50px] left-[500px]"></div> -->
    <div class="circle-4 absolute rounded-full bg-[#ff00d9] top-[100px]"></div>
    <div class="circle-3 absolute rounded-full bg-[#6933ff] top-[20px]"></div>

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
  filter: blur(20px);
  transition: filter 2s;
}
.circle-1{
  /* box-shadow: 2px 2px 30px #999; */
  width: min(28vw,400px);
  height: min(28vw, 400px);
  left: min(8vw,100px);
  animation: animation-1 10s ease-in-out infinite;
}
.circle-2{
  animation: animation-2 10s ease-in-out infinite;
}
.circle-3{
  width: min(21vw,300px);
  height: min(21vw,300px);
  left: 60vw;
  animation: animation-3 15s linear infinite;
}
.circle-4{
  width: min(14vw,200px);
  height: min(14vw,200px);
  left: 40vw;
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