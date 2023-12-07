<template>
  <div class="animate-page-enter grid grid-cols-1 justify-items-center w-full mb-4">
    <div class="w-full max-w-7xl mb-4 rounded-3xl">
      <PagesHeader
        bigText="Product"
        redLetter="s"
        subText=""
      >
      </PagesHeader>
    </div>

    <div class="max-w-full bg-white/90 py-10 px-10 rounded-2xl shadow-2xl">
      <div class=""><h1 class="text-center w-full text-2xl font-bold mb-4">Web Design and Development</h1></div>
      <div class="flex justify-center">
        <p class="text-center mb-10 max-w-[1000px]">Elevate your online presence with our bespoke web design and development services. Not sure what you want? Contact us now for a free consultation.</p>
      </div>
      <div class="w-full overflow-x-auto px-5">
        <div class="flex gap-8 overflow-x-auto p-4">
          <PricingCard :items="webDev"></PricingCard>
        </div>
      </div>
      <p class="text-xs"><span class="text-[1rem]">*</span>Prices displayed above are estimations only, intended for your guidance. Final quoted prices may vary. Generally, the more customizations you want the more likely that the price will differ.</p>
    </div>

    <!-- E-Commerce -->
    <div class="max-w-full bg-white/90 py-10 px-10 mt-20 rounded-2xl shadow-2xl">
      <div class=""><h1 class="text-center w-full text-2xl font-bold mb-4">E-Commerce</h1></div>
      <div class="flex justify-center">
        <p class="text-center mb-10 max-w-[1000px]">Unlock the power of seamless online commerce with our expert web development services. Elevate your business with a user-friendly, secure, and visually stunning e-commerce platforms.</p>
      </div>
      <div class="w-full overflow-x-auto px-5">
        <div class="flex gap-8 overflow-x-auto p-4">
          <PricingCard :items="eCommerce"></PricingCard>
        </div>
      </div>
      <p class="text-xs">*Prices displayed above are estimations only, intended for your guidance. Final quoted prices may vary. Generally, the more customizations you want the more likely that the price will differ.</p>
    </div>
  </div>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PagesHeader from '@/Snippets/PagesHeader.vue';
import PricingCard from '@/Snippets/PricingCard.vue';
import { ref } from 'vue';
    
defineOptions({layout: AppLayout})
/* To Do
 * Should provide price estimates for custom web apps
 * Have a questionaire to help people decide what they want
 * Help me decide via email/
 * Help me decide questionare (comming soon)
 */

 const webDev = ref([
    {title:"Basic",
    special:"Cheapest",
    description:"Want a no hustle online presence? Choose a template and get your website running in no time.",
    amount:'4 999*',
    currency:"R",
    frequency:"From",
    action: 'Get Quote',
    features:['Limited customization','First 2 hours Maintenance free','Choose own hosting provider']},
    {title:"Custom",
    special:"",
    description:"Get a custom website built from the ground up for fit your unique needs.",
    amount:'Custom Pricing',
    currency:"",
    frequency:"",
    action: 'Get Quote',
    features:['Full customization','First 5 hours maintenance on us','Choose own hosting provider','24/7 support']},
    {title:"Web Applications",
    special:"",
    description:"Transform ideas into powerful, tailored web apps for your unique needs with custom design built from the ground up to your exact specifications",
    amount:'Custom Pricing',
    currency:"",
    frequency:"",
    action: 'Get Quote',
    features:['Increased user interaction','Full customization','First 5 hours maintenance on us','Choose own hosting provider','24/7 support']},
  ])

const eCommerce = ref([
  { title:"Basic",
    special:"",
    description:"Want to sell like now-now? Levarage the power of our stunning pre-built templates to get you running in no time.",
    amount:'Custom Pricing',
    currency:"",
    frequency:"",
    action: 'Get Quote',
    features:['Free first consultaion','24/7 support','First 5 hours maintenance on us','Choose own hosting provider','Full IP ownership']},
  { title:"Custom",
    special:"",
    description:"Nothing fits your design? Get a custom, visually captivating design that looks exactly the way you want.",
    amount:'Custom Pricing',
    currency:"",
    frequency:"",
    action: 'Get Quote',
    features:['Free first consultaion','24/7 support','First 5 hours maintenance on us','Choose own hosting provider','Full IP ownership']},
  { title:"CRM",
    special:"",
    description:"Tailored CRM development services using cutting edge technology.",
    amount:'Custom Pricing',
    currency:"",
    frequency:"",
    action: 'Get Quote',
    features:['Free first consultaion','24/7 support','First 5 hours maintenance on us','Choose own hosting provider','Full IP ownership']},
  
])    
</script>