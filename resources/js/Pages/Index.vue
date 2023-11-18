<template>
    <!-- Gradient -->
    <div class="bg-gradient-to-br from-[#e2d1c3] to-[#fdfcfb]  h-screen w-screen z-0">
    </div>
    <!-- Background Art -->
    <BgContainerSimple></BgContainerSimple>
    <!-- Filter -->
    <div class="blurFilter absolute top-0 left-0 bg-black/30 h-screen w-screen z-10">
    </div>
    <!-- Main Container -->
    <div class="absolute top-0 left-0 z-20 flex flex-col h-screen">
        <!-- Top div -->
        <div class="pl-10 pr-10 w-screen flex justify-between items-center h-28">
            <!-- <img src="" alt="logo"> -->
            <h1 class="text-6xl text-gray-50 font-bold">OBSCODE</h1>
            <!-- <NavigationTop></NavigationTop> -->
        </div>


        <!-- Content -->
        <div class="w-screen grow grid p-2">
            <div class="small-headin place-self-center text-center">
                <!-- <h1 class="text-white text-6xl">TECH DOESN'T HAVE TO FEEL SO COMPLICATED</h1> -->
            </div>

            <!-- <div class="small-heading place-self-center">
                <h1 class="text-white text-3xl">Custom Web Solutions</h1>
            </div> -->

            <!-- navigation -->
        </div>
        <NavigationBottom></NavigationBottom>
    </div>
</template>
<script setup>
import NavigationTop from "../Snippets/NavigationTop.vue"
import NavigationBottom from "../Snippets/NavigationBottom.vue"
import BgContainerSimple from "../Snippets/BackgroundArt/BgContainerSimple.vue"

</script>