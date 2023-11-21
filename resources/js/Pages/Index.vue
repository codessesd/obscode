<template>
  <!-- Gradient -->
  <!-- <div class="bg-gradient-to-br from-[#ff6767] to-[#6629ff]  h-screen w-screen z-0">
  </div> -->
  <!-- Background Art -->
  <BgContainerSimple></BgContainerSimple>
  <!-- Filter -->
  <div class="absolute top-0 left-0 bg-white/70 h-screen w-screen z-10">
  </div>
  <!-- Main Container -->
  <div class="absolute top-0 left-0 z-20 flex flex-col h-screen">
    <!-- Top div -->
    <div class="pl-10 pr-10 w-screen flex justify-between items-center h-28">
      <img class="logo w-[250px]" src="/graphics/logo750transparent.png" alt="logo">
      <!-- <NavigationTop></NavigationTop> -->
    </div>


    <!-- Content -->
    <div class="w-screen relative grow p-2">
      <div class="floaty-1 w-20 absolute z-20 top-[20px] left-[350px] hover:rotate-[30deg] hover:scale-125">
        <img src="/graphics/SmallCube.png" alt="floaty">
      </div>
      <div class="floaty-2 w-14 absolute top-[450px] left-[600px]">
        <img src="/graphics/SmallCube.png" alt="floaty">
      </div>
      <div class="middle-section px-16 flex justify-center relative z-10">
        <div class="small-heading pt-16 pl-10 w-8/12">
          <h1 class="text-black font-spartan text-[8rem] leading-[7.5rem] font-bold">Tech doesn't <br> have to feel so <br> complicated</h1>
          <h3 class="sub-text text-2xl font-sanchez uppercase mt-6">Simplified Web Solutions</h3>
        </div>
        <div class="big-graphic w-4/12 relative z-0">
          <img class="big-graphic-img w-[500px]" src="/graphics/10.png" alt="graphic">
        </div>
      </div>
      <div class="buttons-container pl-32 pt-16">
        <!-- bg-gradient-to-r from-red-500 to-purple-500 -->
        <button class="the-button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 drop-shadow-lg
          bg-gradient-to-r from-red-500 to-purple-500 hover:to-red-500 hover:from-purple-500 font-sanchez text-white py-[5px] px-5 rounded-full">
          Start
        </button>
      </div>
      <!-- navigation -->
    </div>
    <!-- <NavigationBottom></NavigationBottom> -->
  </div>
</template>
<script setup>
import NavigationTop from "../Snippets/NavigationTop.vue"
import NavigationBottom from "../Snippets/NavigationBottom.vue"
import BgContainerSimple from "../Snippets/BackgroundArt/BgContainerSimple.vue"

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