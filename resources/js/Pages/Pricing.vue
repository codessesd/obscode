<template>
  <div class="animate-page-enter w-full max-w-7xl mb-4">
    <PagesHeader
      :bigText="headText"
      :subText="subHead"
    >
    </PagesHeader>
    <div class="flex gap-8 overflow-x-auto p-4">
      <div v-for="product in products" class="border min-h-[500px] box-border transition-all rounded-3xl p-6 min-w-[350px] bg-white/70 hover:border-red-400 hover:border-2 hover:scale-105">
        <!-- Top part -->
        <div class="flex justify-between">
          <h1 class="font-bold text-red-400">{{ product.title }}</h1>
          <div v-if="product.special.length > 0" class="rounded-full bg-gradient-to-r from-red-500 to-purple-500 px-2 flex items-center">
            <p class="text-sm font-bold text-white">{{ product.special }}</p>
          </div>
        </div>
        <!-- description -->
        <p class="text-sm mt-8 leading-6">{{ product.description }}</p>
        <!-- Price -->
        <div class="flex mt-6">
          <p class="font-bold text-3xl">{{ product.currency }}</p>
          <p class="font-bold text-3xl">{{ product.amount }}</p>
          <p>{{ product.frequency }}</p>
        </div>
        <!-- Action button -->
        <div class="">
          <Link href="#" as="button" class="bg-red-400 hover:bg-red-500 w-full text-white p-2 mt-8 rounded-md">Buy Now</Link>
        </div>
        <!-- Features list -->
        <div class="mt-6">
          <ul>
            <li v-for="feature in product.features" class="py-1 flex text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="green">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 16.17l-3.88-3.88a1.5 1.5 0 0 1 2.12-2.12L9 11.83l6.59-6.59a1.5 1.5 0 0 1 2.12 2.12L9 16.17z"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PagesHeader from '@/Snippets/PagesHeader.vue';
import { ref } from 'vue';

const headText = "Pricing"
const subHead = "Premium services at affordable prices"
    
defineOptions({layout: AppLayout})

let products = ref([
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:39,
    currency:"R",
    frequency:"/month",
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"Most Popular",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:49,
    currency:"R",
    frequency:"/month",
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:99,
    currency:"R",
    frequency:"/month",
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:100,
    currency:"R",
    frequency:"/month",
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:100,
    currency:"R",
    frequency:"/month",
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:100,
    currency:"R",
    frequency:"/month",
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:100,
    currency:"R",
    frequency:"/month",
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
  ])

    
</script>