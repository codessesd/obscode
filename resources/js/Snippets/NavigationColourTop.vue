<template>
  <div class="buttons-container flex">
    <span v-for="item in menuItems">
      <Link :href="item.url" as="button" class="nav-btn w-28 overflow-hidden mr-3 active:text-black ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 drop-shadow-lg
        text-black py-[1px] px-[1px] rounded-md"
        :class="[item.active ? activeClass : normalClass]"
        >
        <p class="bg-white h-full py-[4px] w-full rounded-[5px]">
          {{ item.label }}
        </p>
      </Link>
    </span>
  </div>
</template>
<script setup>

let props = defineProps({menuItems:Array})

const activeClass = 'bg-gradient-to-r from-red-500 to-purple-500 hover:to-red-500 hover:from-purple-500';
const normalClass = 'bg-gray-200';

</script>

<style scoped>
.nav-btn{
  transition: transform 0.5s, background-color 2s;
}
</style>