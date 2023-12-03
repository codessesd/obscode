<template>
  <div class="animate-page-enter grid grid-cols-1 justify-items-center w-full mb-4">
    <div class="w-full max-w-7xl mb-4">
      <PagesHeader
        :bigText="headText"
        :subText="subHead"
      >
      </PagesHeader>
    </div>

    <div class="max-w-full bg-white/90 py-10 rounded-t-[100px] rounded-b-2xl">
      <div class=""><h1 class="text-center w-full text-2xl font-bold mb-8">Web Design and Development</h1></div>
      <div class="w-full overflow-x-auto px-5">
        <div class="flex gap-8 overflow-x-auto p-4">
          <PricingCard :items="webDev"></PricingCard>
        </div>
      </div>
    </div>

    <!-- Custom Web -->
    <div class="flex gap-8 overflow-x-auto p-4">
      <PricingCard :items="customWeb"></PricingCard>
    </div>
  </div>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PagesHeader from '@/Snippets/PagesHeader.vue';
import PricingCard from '@/Snippets/PricingCard.vue';
import { ref } from 'vue';

const headText = "Pricing"
const subHead = "Premium services at affordable prices"
    
defineOptions({layout: AppLayout})

let customWeb = ref([
{title:"Custom Web Applications",
    special:"",
    description:"For those with unique business needs. Transform ideas into powerful, tailored web apps.",
    amount:'Custom Pricing',
    currency:"",
    frequency:"",
    action: 'Book a Consultation',
    features:['Free first consultaion','24/7 support','First 5 hours maintenance on us','Choose own hosting provider','Full IP ownership']}
])

let webDev = ref([
    {title:"Web Development",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:'10 999',
    currency:"R",
    frequency:"/once off",
    action: 'Buy Now',
    features:['First 2 hours Maintenance free','Choose your own ','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:99,
    currency:"R",
    frequency:"/month",
    action: 'Buy Now',
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:100,
    currency:"R",
    frequency:"/month",
    action: 'Buy Now',
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:100,
    currency:"R",
    frequency:"/month",
    action: 'Buy Now',
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:100,
    currency:"R",
    frequency:"/month",
    action: 'Buy Now',
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    amount:100,
    currency:"R",
    frequency:"/month",
    action: 'Buy Now',
    features:['25 products','Up to 10,000 subscribers','Advanced analytics','24-hour support response time','Marketing automations']},
  ])

    
</script>