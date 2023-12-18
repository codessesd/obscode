<template>
  <div class="buttons-container flex nav-bottom z-20 bg-white shadow-xl mx-2 py-2 justify-center rounded ">
    <span v-for="item in menuItems">
      <Link v-if="!item.active" :href="item.url" as="button" class="the-button text-[0.80rem] w-20 overflow-hidden mr-3 active:text-black transition-transform ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 drop-shadow-lg
        bg-gradient-to-r from-red-500 to-purple-500 hover:to-red-500 hover:from-purple-500 text-white py-[2px] rounded-full">
        {{ item.label }}
      </Link>
    </span>
  </div>
</template>
<script setup>

  let props = defineProps({menuItems:Array})

</script>
