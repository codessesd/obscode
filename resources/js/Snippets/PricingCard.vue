<template>
  <div v-for="item in items" class="border min-h-[500px] box-border transition-all rounded-3xl p-6 min-w-[320px] max-w-[400px] w-full bg-white/70 hover:border-red-400 hover:border-2 hover:scale-105">
    <!-- Top part -->
    <div class="flex justify-between">
      <h1 class="font-bold text-red-400">{{ item.title }}</h1>
      <div v-if="item.special.length > 0" class="rounded-full h-6 w-36 bg-gradient-to-r from-red-500 to-purple-500 px-2 flex items-center">
        <p class="text-sm font-bold text-white text-center w-full">{{ item.special }}</p>
      </div>
    </div>
    <!-- description -->
    <p class="text-sm mt-8 leading-6 min-h-[80px]">{{ item.description }}</p>
    <!-- Price -->
    <div class="flex mt-6">
      <p class="font-bold text-3xl">{{ item.currency }}</p>
      <p class="font-bold text-3xl">{{ item.amount }}</p>
      <p>{{ item.frequency }}</p>
    </div>
    <!-- Action button -->
    <div class="">
      <a href="https://wa.me/+27603400362" target="_blank" class="bg-red-400 block text-center hover:bg-red-500 w-full text-white p-2 mt-8 rounded-md">{{ item.action }}</a>
    </div>
    <!-- Features list -->
    <div class="mt-6">
      <ul>
        <li v-for="feature in item.features" class="py-1 flex text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="green">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.17l-3.88-3.88a1.5 1.5 0 0 1 2.12-2.12L9 11.83l6.59-6.59a1.5 1.5 0 0 1 2.12 2.12L9 16.17z"/>
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="red">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 6l12 12M6 18l12-12" stroke="red" stroke-width="3"/>
          </svg> -->
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  defineProps({items:Array})
</script>