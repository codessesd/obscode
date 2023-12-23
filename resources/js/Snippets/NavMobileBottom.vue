<template>
  <div class="px-2 fixed w-full bottom-0 z-10">
  <div class="buttons-container w-full flex nav-bottom bg-gray-700 py-3 justify-evenly rounded-t-2xl ">
    <template v-for="item in menuItems">
      <Link v-if="!item.active" :href="item.url" as="button" class="the-button text-[1.1rem] px-3 overflow-hidden active:text-black transition-transform ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 drop-shadow-lg
        bg-gradient-to-r from-red-500 to-purple-500 hover:to-red-500 hover:from-purple-500 text-white py-[2px] rounded"
      >
        {{ item.label }}
      </Link>
    </template>
  </div>
  </div>
</template>
<script setup>

  let props = defineProps({menuItems:Array})

</script>

<style scoped>
.buttons-container{
  box-shadow: 0px 0px 10px #ccc;
}
.noshow{
  display: none;
}
</style>