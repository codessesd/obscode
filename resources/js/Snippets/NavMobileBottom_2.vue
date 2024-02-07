<template>
  <div class="px-2 fixed w-full bottom-0 z-10">
  <div :style="{height : containerHeight, backgroundColor : bgColour}"
    class="buttons-container transition-all duration-700 grid grid-cols-1 w-full nav-bottom py-2 rounded-t-2xl ">
    <div @click="toggleOpen" 
      :style="{color : textColor}"
      class="text-center text-4xl font-bold">
      <i v-if="!open" class="pi pi-angle-up"></i>
      <i v-if="open" class="pi pi-angle-down"></i>
    </div>
    <template v-for="item in menuItems">
      <Link v-if="!item.active" :href="item.url" as="button" class="the-button uppercase text-sm mx-auto w-48 mb-4 text-[1.1rem] px-3 overflow-hidden active:text-black transition-transform ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 drop-shadow-lg
        bg-gradient-to-r from-red-500 to-purple-500 hover:to-red-500 hover:from-purple-500 text-white rounded"
      >
        {{ item.label }}
      </Link>
    </template>
  </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';


  let props = defineProps({menuItems:Array})

  let open = ref(false)

  let containerHeight = ref('46px')
  // let bgColour = ref('#475569')
  let bgColour = ref('#F87171')
  let textColor = ref('#FFFFFF')

  const toggleOpen = () => {
    open.value =!open.value
    if(open.value){
      containerHeight.value = '240px'
      bgColour.value = '#ffff'
      textColor.value = '#F87171'
    }else{
      containerHeight.value = '46px'
      // bgColour.value = '#475569'
      bgColour.value = '#F87171'
      textColor.value = '#FFFFFF'
    }
  }

</script>

<style scoped>
.buttons-container{
  box-shadow: 0px 0px 10px #ccc;
}
.noshow{
  display: none;
}
</style>