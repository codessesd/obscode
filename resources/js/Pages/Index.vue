<template>
  <!-- Index -->
  <div class="animate-page-enter w-full relative grow p-2">
    <div class="floaty-1 w-20 absolute z-20 hover:rotate-[30deg] hover:scale-125">
      <img src="/graphics/SmallCube.png" alt="floaty">
    </div>
    <div class="floaty-2 w-14 absolute z-20 hover:rotate-[30deg] hover:scale-125">
      <img src="/graphics/SmallCube.png" alt="floaty">
    </div>
    <div class="graphic-section flex justify-center relative z-10">
      <div class="super-big-text min-[425px]:w-8/12">
        <!-- <h1 class="text-black font-spartan text-[4em] leading-[4rem] min-[1160px]:text-[6em] min-[1160px]:leading-[6rem] min-[1440px]:text-[8rem] min-[1440px]:leading-[7.5rem] font-bold"> -->
        <h1 class="text-black font-spartan font-bold">
          <span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">T</span>ech <span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">d</span>oesn'<span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">t</span>
          <br> h<span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">a</span>ve t<span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">o</span> fe<span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">e</span>l
          <br> c<span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">o</span>m<span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">p</span>lica<span class="hover:text-red-400 hover:text-[1.3em] transition-all duration-300 relative inline-block">t</span>ed
        </h1>
        <h3 class="sub-text min-[425px]:text-xl mt-6">Simplified Web Solutions</h3>
      </div>
      <div class="big-graphic w-4/12 relative flex items-center z-0 max-[425px]:hidden">
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
.super-big-text{
  padding-left: 3%;
  padding-top: 60px;
}
.sub-text{
  font-size: clamp(1em, 2vw,2em);
}
.super-big-text h1{
  /* font-size: clamp(1rem, 10vh + 1rem, 8rem); */
  font-size: clamp(3.2rem, 8vw,9rem);
  line-height: 1;
}
.floaty-1{
  left: 25%;
  top: 0px;
  animation: animateFloaty1 5s ease-in-out infinite;
  transition: transform 1s;
}

@keyframes animateFloaty1 {
  0% {top: 0px}
  /* 25% {top: 100px} */
  50% {top: 40px}
  /* 75% {top: 100px} */
  100% {top: 0px}
}

.floaty-2{
  left: max(50%,250px);/*min250px*/
  top: min(50vh,500px);/*max500px;*/
  animation: animateFloaty2 6s ease-in-out infinite;
  transition: transform 1s;
}

@keyframes animateFloaty2 {
  0% {top: min(50vh,500px);}
  /* 25% {top: 100px} */
  50% {top: min(60vh,580px);}
  /* 75% {top: 100px} */
  100% {top: min(50vh,500px);}
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