<template>
  <div class="animate-page-enter-slide-up w-full max-w-7xl mb-4">

    <Dialog
      v-if="showDialog1"
      @close="showDialog1=false"
    >
      <template #title>
        {{ dialogTitle }}
      </template>

      <template #content>
        {{ dialogContent }}
      </template>
    </Dialog>

    <PagesHeader
      bigText="Contact"
      redLetter="Us"
      subText="Need to get in touch? We'd love to hear from you!"
    >
    </PagesHeader>
    <div class="bg-white/80 shadow-md rounded-3xl px-4 py-24 mx-1">
        <!-- <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu blur-xl overflow-hidden  sm:top-[-20rem]" aria-hidden="true">
          <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div> -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Message</h2>
      </div>
      <!-- The form -->
      <form @submit.prevent="sendMessage" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name*</label>
            <div class="mt-2.5">
              <input type="text" v-model="form.name" maxlength="50" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input type="text" v-model="form.lastname" maxlength="50" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
            <div class="mt-2.5">
              <input type="text" v-model="form.company" maxlength="50" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email*</label>
            <div class="mt-2.5">
              <input type="email" v-model="form.email" maxlength="100" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
            <div class="relative mt-2.5">
              <input type="tel" v-model="form.phone" maxlength="20" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message* <span class="text-xs font-normal italic text-slate-400">Charaters: {{ form.message.length }} of 1000</span></label>
            <div class="mt-2.5">
              <textarea name="message" v-model="form.message" id="message" maxlength="1000" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <SwitchGroup as="div" class="hidden gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <Switch v-model="agreed" :class="[agreed ? 'bg-red-400' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
                <span class="sr-only">Agree to policies</span>
                <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
              </Switch>
            </div>
            <SwitchLabel class="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our
              {{ ' ' }}
              <a href="#" class="font-semibold text-red-400">privacy&nbsp;policy</a>.
            </SwitchLabel>
          </SwitchGroup>
        </div>
        <div class="mt-10">
          <div v-if="reCaptchaRendered === false" class="text-red-400 text-sm italic">Loading reCAPTCHA...</div>
          <div id="reCapture_div"></div>
          
          <!-- <input type="submit" value="Submit"> -->
          <template v-if="Object.keys(form.errors).length > 0">
            <p class="mb-1 mt-8 text-red-500 font-bold">There are some error in the form</p>
            <ul class=" text-sm text-red-400">
              <li v-for="error in $page.props.errors">{{ error }}</li>
            </ul>
          </template>
          <button :disabled="processing" :data-sitekey="siteKey" data-callback="sendMessage" data-action="submit" class="g-recaptcha block w-full mt-10 rounded-md bg-red-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">
            <span v-if="!processing">Let's talk</span>
            <i v-if="processing" class="pi pi-spinner pi-spin"></i>
          </button>
        </div>
      </form>
    </div>

    <div class="flex justify-center mt-20 mx-1">
      <div class="shadow-lg bg-white/70 w-full min-h-[200px] rounded-3xl py-36">
        <!-- <div class="bg-contain bg-no-repeat bg-center w-full h-20 mb-9"></div> -->
        <h2 class="font-bold text-3xl text-center text-red-400 mb-5">Our Details</h2>
        <div class="flex justify-center mt-8">
          <div class="w-64">
            <p class="text-lg px-4 mb-4"><i class="w-10 pi pi-whatsapp"></i><a href="https://wa.me/+27603400362" target="_blank">(+27) 60 340 0362</a></p>
            <p class="text-lg px-4 mb-4"><i class="w-10 pi pi-phone"></i><a href="tel:+27603400362" target="_blank">(+27) 60 340 0362</a></p>
            <p class="text-lg px-4 mb-4"><i class="w-10 pi pi-at"></i><a href="mailto:hello@obscode.co.za" target="_blank">hello@obscode.co.za</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import PagesHeader from '@/Snippets/PagesHeader.vue';
import Dialog from '@/Snippets/Dialog.vue'
import DialogModal from '@/Components/DialogModal.vue';
import { useForm, usePage } from '@inertiajs/vue3';

const agreed = ref(false)
defineOptions({layout: AppLayout})

const siteKey = import.meta.env.VITE_V2_RECAPTCHA_SITE_KEY;

let form = useForm({
  name: '',
  lastname:'',
  company: '',
  email: '',
  phone: '',
  message: '',
  token:''
})

let showDialog1 = ref(false);
let processing = ref(false)

let dialogTitle = ref('');
let dialogContent = ref('');

let sendMessage = ()=>{
  usePage().props.errors = {};
  form.token = grecaptcha.getResponse(siteKey.value)
  form.post('/contact',{
    preserveScroll:true,
    onStart:()=> processing.value = true,
    onFinish:()=> {
      processing.value = false
      grecaptcha.reset(siteKey.value)
    },
    onSuccess: page=>{
      if(page.props.success){
        showDialog1.value = true;
        dialogTitle.value = "Success";
        dialogContent.value = "Your message has been sent successfully.";
      }
      if(page.props.fail){
        showDialog1.value = true;
        dialogTitle.value = "Error";
        dialogContent.value = "There was an error sending your message. Please try again later. " + page.props.fail;
      }
    },
  });
}

let reCaptchaRendered = ref(false);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    if(reCaptchaLoaded && !reCaptchaRendered.value){
      grecaptcha.render('reCapture_div', {
        'sitekey' : '6Leiu1IpAAAAAOQ2x7WfbNk5IUn2wtMyWM5MRIhb',
        'action': 'LOGIN',
      });
      reCaptchaRendered.value = true;
    }
  }, 400);
});

watch(()=>reCaptchaRendered.value,(newValue)=>{
  if(newValue){
    clearInterval(intervalId)
  }
})

onMounted(()=>{
  const title = document.createElement('title');
  document.head.appendChild(title);
  title.innerText = "Contact Us"
})

</script>
<style lang="">
  
</style>