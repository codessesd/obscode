<template>
  <div class="layout-outer-div relative min-h-screen overflow-hidden">
      <BgArtSimple
        :showHardBlur="!isHomePage"
      >
      </BgArtSimple>
   <!-- Top Bar -->
    <div class="top-bar top-0 w-full flex justify-between items-center h-28 z-20">
      <!-- logo -->
      <img class="w-[250px]" src="/graphics/logo750transparent.png" @click="$inertia.visit('/')" alt="logo">
      <!-- Top Navigation Desktop -->
      <Transition name="fade">
        <div v-show="!isHomePage" class="h-20 flex items-center max-[768px]:hidden">
          <NavigationColourTop
          :menuItems="menuItems">
          </NavigationColourTop>
        </div>
      </Transition>

      <!-- Top Navigation Mobile -->
      <Transition name="fade">
        <div v-show="!isHomePage" class="h-20 flex items-center min-[769px]:hidden">
          <NavMobile
          :menuItems="menuItems">
          </NavMobile>
        </div>
      </Transition>
    </div>
    <div class="flex justify-center mb-16">
      <slot></slot>
    </div>
    <!-- Bottom Navigation Desktop -->
    <!-- <Transition name="scale">
      <div v-show="isHomePage" class="nav-bottom fixed bottom-0 left-0 pb-10 z-20">
        <NavigationColourBottom
          :menuItems = "menuItems">
        </NavigationColourBottom>
      </div>
    </Transition> -->
    <!-- Bottom Navigation Mobile -->
    <Transition name="scale">
      <div class="fixed w-full bottom-14 h-3">
        <div v-show="isHomePage" class="min-[769px]:hidden">
          <NavMobileBottom
            :menuItems = "menuItems"
          >
          </NavMobileBottom>
        </div>
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
import NavMobile from "@/Snippets/NavMobile.vue";
import NavMobileBottom from "@/Snippets/NavMobileBottom.vue";
import Footer from "@/Snippets/Footer.vue"
import { usePage } from "@inertiajs/vue3";

let isHomePage = ref(usePage().url == '/')

let menuItems = ref([{label : 'Home', url : '/', active : usePage().url == '/'},
                      {label : 'Products', url : '/pricing', active : usePage().url.startsWith('/pricing')},
                      {label : 'Services', url : '/services', active : usePage().url.startsWith('/services')},
                    ]);

watch(()=>usePage().url,(pageUrl)=>{
    menuItems.value = [{label : 'Home', url : '/', active : pageUrl == '/'},
              {label : 'Products', url : '/pricing', active : pageUrl.startsWith('/pricing')},
              {label : 'Services', url : '/services', active : pageUrl.startsWith('/services')},
             ];
    isHomePage = usePage().url == '/'
  });

</script>

<style scoped>
.nav-bottom{
  padding-left: 3%;
}
.top-bar{
  padding-left: 3%;
  padding-right: 3%;
}
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