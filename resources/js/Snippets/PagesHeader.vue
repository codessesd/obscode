<template>
  <div class="">
    <!-- Services header -->
    <div class="full-height-header min-h-[230px] h-screen-minus-120 flex rounded-3xl p-5">
      <div class="flex-1 flex justify-center top-10" :class="{'items-center':bigHeight}">
        <div class="text-center pb-48">
          <h1 class="page-title font-bold mb-8">{{ bigText }}<span class="text-red-400">{{ redLetter }}</span></h1>
          <!-- <div class="h-[2px] w-full bg-gradient-to-r from-red-400 to-purple-400 rounded-full my-6"></div> -->
          <p class="text-lg">{{ subText }}</p>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  defineProps({bigText : {type:String, default:'My Header'},
              subText : {type:String, default:'My subtext is a Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
              redLetter: {type:String, default: ''},
              });
  
  const viewPortHeight = ref(window.innerHeight);
  const bigHeight = ref(window.innerHeight > 514);
  
  const updateHeight = () => {
    viewPortHeight.value = window.innerHeight;
    bigHeight.value = window.innerHeight > 514;
  };
  
  onMounted(() => {
    window.addEventListener('resize', updateHeight);
    updateHeight();
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateHeight);
  });
  </script>

  <style scoped>
  .page-title{
    /* font-size: clamp(3.2rem, 8vw,9rem); */
    font-size: min(12vw, 7rem);
  }
</style>