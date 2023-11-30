<template>
  <div class="layout-outer-div relative min-h-screen">
      <BgArtSimple
        :showHardBlur="!isHomePage"
      >
      </BgArtSimple>
    <!-- Navigation -->
    <div class="top-0 pl-10 pr-10 w-full flex justify-between items-center h-28 z-20">
      <!-- logo -->
      <img class="w-[250px]" src="/graphics/logo750transparent.png" alt="logo">
      <Transition name="fade">
        <div v-show="!isHomePage" class="h-20 flex items-center">
          <NavigationColourTop
          :menuItems="navItems">
          </NavigationColourTop>
        </div>
      </Transition>
    </div>
    <div class="p-2 flex justify-center mb-16">
      <slot></slot>
    </div>
    <!-- Bottom Navigation buttons -->
    <Transition name="scale">
      <div v-show="isHomePage" class="fixed bottom-0 left-0 pl-16 pb-10 z-20">
        <NavigationColourBottom
          :menuItems = "navItems">
        </NavigationColourBottom>
      </div>
    </Transition>
    <Footer v-if="!isHomePage"></Footer>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import BgArtSimple from "../Snippets/BackgroundArt/BgArtSimple.vue"
import NavigationColourBottom from "@/Snippets/NavigationColourBottom.vue";
import NavigationColourTop from "@/Snippets/NavigationColourTop.vue";
import Footer from "@/Snippets/Footer.vue"
import { usePage } from "@inertiajs/vue3";

let isHomePage = ref(usePage().url == '/')

let navItems = ref([{label : 'Home', url : '/', active : usePage().url == '/'},
                      {label : 'Services', url : '/services', active : usePage().url.startsWith('/services')},
                      {label : 'Pricing', url : '/pricing', active : usePage().url.startsWith('/pricing')}
                    ]);

watch(()=>usePage().url,(pageUrl)=>{
    navItems.value = [{label : 'Home', url : '/', active : pageUrl == '/'},
              {label : 'Services', url : '/services', active : pageUrl.startsWith('/services')},
              {label : 'Pricing', url : '/pricing', active : pageUrl.startsWith('/pricing')}
             ];
    isHomePage = usePage().url == '/'
  });

</script>

<style scoped>
.scale-enter-active, .scale-leave-active {
  transition: transform 0.7s ease;
}
.scale-enter-to, .scale-enter-from{
  transform: scale(1);
}

.scale-enter-from, .scale-leave-to {
  transform: scale(0);
}

.fade-enter-to, .fade-enter-from{
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>