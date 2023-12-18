<template>
    <!-- navigation -->
    <div class="absolute bottom-32 w-full flex justify-center">
        <ul class="bg-slate-400/20 w-fit rounded-md pl-[6px] py-[6px] flex justify-between">
            <li v-for="item in navItems" class="bg-white/50 text-gray-500 mr-[6px] py-[10px] rounded px-[60px]">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let navItems = ref([{name: "Home", href: "#"},
                    {name: "Services", href: "#"},
                    {name: "Pricing", href: "#"}])
</script>