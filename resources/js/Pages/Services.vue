<template>
  <div class="animate-page-enter w-full max-w-7xl mb-4">
    <PagesHeader
      :bigText="headText"
      :subText="subHead"
    >
    </PagesHeader>
    <div class="grid grid-cols-3 justify-items-center gap-3">
      <div v-for="service in services" class="shadow-md bg-white/70 w-full max-w-xs min-h-[350px] rounded-xl p-2 pt-10">
        <div :class="service.bg" class="bg-contain bg-no-repeat bg-center w-full h-20 mb-9"></div>
        <h2 class="font-bold text-center text-red-400 mb-5">{{ service.header }}</h2>
        <p class="text-sm px-4 text-center">{{ service.body }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PagesHeader from '@/Snippets/PagesHeader.vue';
import { ref } from 'vue';

const headText = "Services"
const subHead = "Let us take the hastle out of your hands with our premium services"
    
defineOptions({layout: AppLayout})

let services = ref([
  {header:"Custom Web Applications",
    body:"Transform ideas into powerful, tailored web apps for your unique business needs.",
    bg:"bg-[url('/icons/1.png')]"},
  {header:"Web Design and Development",
    body:"Elevate your brand with visually stunning and user-friendly websites.",
    bg:"bg-[url('/icons/2.png')]"},
  {header:"E-commerce Solutions",
    body:"Boost your online sales with secure and intuitive e-commerce platforms.",
    bg:"bg-[url('/icons/3.png')]"},
  {header:"Software Products",
    body:"Choose the right product from our ready made software solutions",
    bg:"bg-[url('/icons/4.png')]"},
  {header:"UX and UI design",
    body:"Engage users with cutting-edge design that combines aesthetics and functionality.",
    bg:"bg-[url('/icons/5.png')]"},
  {header:"Content Management Systems (CMS)",
    body:"Easily manage and update your website content with our user-friendly CMS solutions.",
    bg:"bg-[url('/icons/6.png')]"}
])

let services2 = ref([
  {header:"Custom Web Application",body:"Unleash the power of innovation with our bespoke web applications tailored to your unique business needs. From seamless functionality to intuitive interfaces, we turn your vision into a dynamic, user-centric reality, empowering your business for the digital age."},
  {header:"Web Design and Development",body:"Elevate your online presence with captivating website design and development. We blend creativity and functionality to craft visually stunning websites that not only showcase your brand but also provide an immersive user experience. Your digital journey begins here."},
  {header:"E-commerce Solutions",body:"Transform your business into an online success story with our E-commerce solutions. We specialize in creating secure, user-friendly online stores that captivate your audience and drive conversions. Maximize your revenue potential in the competitive world of online commerce."},
  {header:"Email and Web Hosting:",body:"Trust your digital assets to our reliable hosting services. We offer seamless email and web hosting solutions that ensure speed, security, and 24/7 accessibility. Experience the peace of mind that comes with hosting tailored to your business's unique requirements."},
  {header:"UX and UI design",body:"Redefine user engagement with our cutting-edge UX and UI design services. We meticulously craft interfaces that not only look stunning but also prioritize user experience, resulting in websites and applications that users love to interact with. Elevate your brand with design that goes beyond aesthetics."},
  {header:"Content Management Systems (CMS)",body:"Take control of your online content effortlessly with our Content Management Systems. Whether it's WordPress, Joomla, or Drupal, we empower you to manage and update your website content seamlessly. Say goodbye to complexity and hello to a user-friendly CMS that puts you in command."}
])
</script>