<template>
  <div class="mobile-nav">
    <div class="hamburger-btn bg-white h-7 w-9 mt-1 shadow-xl rounded grid place-items-center py-[5px] px-1 bg-gradient-to-r from-red-400 to-purple-400 active:scale-95 active:ring-gray-400"
      @click="showMobileMenu = true"
    >
      <!-- <div class="w-10/12 h-1 rounded-full bg-gradient-to-r from-red-400 to-purple-400"></div> -->
      <!-- <div class="w-10/12 h-1 rounded-full bg-gradient-to-r from-red-400 to-purple-400"></div> -->
      <!-- <div class="w-10/12 h-1 rounded-full bg-gradient-to-r from-red-400 to-purple-400"></div> -->
      <div class="w-10/12 h-[2px] rounded-full bg-white"></div>
      <div class="w-10/12 h-[2px] rounded-full bg-white"></div>
      <div class="w-10/12 h-[2px] rounded-full bg-white"></div>
    </div>

    <!-- <SecondaryButton>
      <div class="">
        <div class="w-5 h-[2px] rounded-full bg-black"></div>
        <div class="w-5 h-[2px] rounded-full bg-black"></div>
        <div class="w-5 h-[2px] rounded-full bg-black"></div>
      </div>
    </SecondaryButton> -->

    <Transition>
      <div v-if="showMobileMenu" class="fixed w-full h-full left-0 top-0 z-40">
        <div class="absolute bg-white w-full h-full left-0 top-0"></div>
        <div class="absolute w-full h-full z-20 grid grid-cols-2 overflow-auto">
          <div class="pl-2 pt-10">
            <img class="w-[150px]" src="/graphics/logo750transparent.png" @click="$inertia.visit('/')" alt="logo">
          </div>
          <div class="pr-[5%] pt-10 justify-self-end">
            <div class="bg-white border border-gray-200 text-black h-7 w-9 mt-2 shadow-xl flex justify-center items-center rounded active:scale-95 active:bg-gray-200"
            @click="showMobileMenu = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <ul class="pt-20 text-center col-span-2">
            <li v-for="item in menuItems" class="p-2 font-bold text-3xl">
              <Link :href="item.url" as="button" class="w-full h-full"
               @click="showMobileMenu = false">
                {{ item.label }}
              </Link>
            </li>
          </ul>
          <div class=" text-center text-sm text-white w-full p-2 col-span-2 place-self-end bg-slate-500">&copy2024 Obscode</div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from 'vue';

let props = defineProps({menuItems:Array})

let showMobileMenu = ref(false)

</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: top 0.5s ease-in-out;
}
.v-enter-from, .v-leave-to {
  top: 100vh;
}
.hamburger-btn:hover{
  transform: rotateY(180deg);
  transition: transform 0.5s ease-in-out;
}
</style>

