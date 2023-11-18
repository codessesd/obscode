<template>
    <!-- navigation -->
    <div>
        <ul class="bg-slate-400/20 w-fit rounded-md pl-[6px] py-[6px] flex justify-between">
            <li v-for="item in navItems" class="bg-white/50 text-gray-500 mr-[6px] py-[6px] rounded px-6">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let navItems = ref([{name: "Home", href: "#"},
                    {name: "Services", href: "#"},
                    {name: "Pricing", href: "#"}])
</script>