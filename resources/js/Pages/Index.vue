<template>
  <!-- Index -->
  <div class="animate-page-enter w-full relative grow p-2">
    <div class="floaty-1 w-20 absolute z-20 top-[20px] left-[350px] hover:rotate-[30deg] hover:scale-125">
      <img src="/graphics/SmallCube.png" alt="floaty">
    </div>
    <div class="floaty-2 w-14 absolute z-20 top-[450px] left-[600px] hover:rotate-[30deg] hover:scale-125">
      <img src="/graphics/SmallCube.png" alt="floaty">
    </div>
    <div class="middle-section px-16 flex justify-center relative z-10">
      <div class="small-heading pt-16 pl-10 w-8/12">
        <h1 class="text-black font-spartan text-[4em] leading-[4rem] min-[1160px]:text-[6em] min-[1160px]:leading-[6rem] min-[1440px]:text-[8rem] min-[1440px]:leading-[7.5rem] font-bold">
          <span class="hover:text-red-400 hover:text-[10rem] transition-all">T</span>ech <span class="hover:text-red-400 hover:text-[10rem] transition-all">d</span>oesn'<span class="hover:text-red-400 hover:text-[10rem] transition-all">t</span>
          <br> h<span class="hover:text-red-400 hover:text-[10rem] transition-all">a</span>ve t<span class="hover:text-red-400 hover:text-[10rem] transition-all">o</span> fe<span class="hover:text-red-400 hover:text-[10rem] transition-all">e</span>l
          <br> c<span class="hover:text-red-400 hover:text-[10rem] transition-all">o</span>m<span class="hover:text-red-400 hover:text-[10rem] transition-all">p</span>lica<span class="hover:text-red-400 hover:text-[10rem] transition-all">t</span>ed</h1>
        <h3 class="sub-text text-xl font-sanchez uppercase mt-6">Simplified Web Solutions</h3>
      </div>
      <div class="big-graphic w-4/12 relative z-0">
        <img class="big-graphic-img w-[500px]" src="/graphics/10.png" alt="graphic">
      </div>
    </div>
  </div>
</template>
<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";

defineOptions({layout:AppLayout})

</script>

<style scoped>
.floaty-1{
  animation: animateFloaty1 5s ease-in-out infinite;
  transition: transform 1s;
}

@keyframes animateFloaty1 {
  0% {top: 20px}
  /* 25% {top: 100px} */
  50% {top: 60px}
  /* 75% {top: 100px} */
  100% {top: 20px}
}

.floaty-2{
  animation: animateFloaty2 6s ease-in-out infinite;
  transition: transform 1s;
}

@keyframes animateFloaty2 {
  0% {top: 450px}
  /* 25% {top: 100px} */
  50% {top: 480px}
  /* 75% {top: 100px} */
  100% {top: 450px}
}

.big-graphic{
  /* animation: animateBigGraphic 10s ease-in-out infinite; */
  transition: top 2s ease;
}

@keyframes animateBigGraphic{
  0%{transform: scale(1);}
  50%{transform: scale(1.06);}
  100%{transform: scale(1);}
}
</style>