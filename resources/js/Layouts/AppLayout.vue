<template>
  <div class="layout-outer-div relative min-h-screen overflow-hidden">
      <BgArtSimple :showHardBlur="!isHomePage">
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
    <Transition name="scale">
      <div v-show="isHomePage" class="nav-bottom fixed bottom-0 left-0 pb-10 z-20 max-[768px]:hidden">
        <NavigationColourBottom
          :menuItems = "menuItems">
        </NavigationColourBottom>
      </div>
    </Transition>
    <!-- Bottom Navigation Mobile -->
    <Transition name="slide">
          <NavMobileBottom_2
            v-show="isHomePage" class="min-[769px]:hidden"
            :menuItems = "menuItems"
          >
          </NavMobileBottom_2>
    </Transition>
    <Footer v-if="!isHomePage"></Footer>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, onUpdated, ref, watch } from "vue";
import BgArtSimple from "../Snippets/BackgroundArt/BgArtSimple.vue"
import NavigationColourBottom from "@/Snippets/NavigationColourBottom.vue";
import NavigationColourTop from "@/Snippets/NavigationColourTop.vue";
import NavMobile from "@/Snippets/NavMobile.vue";
import NavMobileBottom_2 from "@/Snippets/NavMobileBottom_2.vue";
import Footer from "@/Snippets/Footer.vue"
import { usePage } from "@inertiajs/vue3";

let showLoadingDiv = ref(false)

watch(()=>usePage().url, (value, oldValue)=>{
  if(value != oldValue){
    showLoadingDiv.value = true;
    setTimeout(()=>showLoadingDiv.value = false, 2000);
  }
})

let isHomePage = ref(usePage().url == '/')

let menuItems = ref([{label : 'Home', url : '/', active : usePage().url == '/'},
                      {label : 'Products', url : '/pricing', active : usePage().url.startsWith('/pricing')},
                      {label : 'Services', url : '/services', active : usePage().url.startsWith('/services')},
                      {label : 'Contact', url : '/contact', active : usePage().url.startsWith('/contact')},
                    ]);

watch(()=>usePage().url,(pageUrl)=>{
    menuItems.value = [{label : 'Home', url : '/', active : pageUrl == '/'},
              {label : 'Products', url : '/pricing', active : pageUrl.startsWith('/pricing')},
              {label : 'Services', url : '/services', active : pageUrl.startsWith('/services')},
              {label : 'Contact', url : '/contact', active : pageUrl.startsWith('/contact')},
             ];
    isHomePage = usePage().url == '/'
  });

</script>

<style scoped>
.loading-animation{
  height: 100%;
  width: 100%;
  left: -100vw;
  z-index: 30;
  animation: loadingAnim 1.3s ease-in-out;
}
@keyframes loadingAnim{
  0%{left: -100vw;}
  50%{left: 70vw;}
  100%{left: -100vw;}
}
.loadslider-enter-active, .loadslider-leave-active {
  transition: left 1s ease;
}
.loadslider-enter-to, .loadslider-enter-from{
  left: 50vw;
}

.loadslider-enter-from, .loadslider-leave-to {
  left: -100vw;
}
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
.slide-enter-active, .slide-leave-active{
  transition: bottom 0.8s ease-in-out, opacity 0.8s ease-in-out;
}

.slide-enter-to, .slide-leave-from{
  bottom: 0px;
  opacity: 1;
}

.slide-enter-from, .slide-leave-to{
  bottom: -100px;
  opacity: 0;
}
</style>