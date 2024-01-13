import './bootstrap';
import '../css/app.css';

import 'primeicons/primeicons.css'

import { createApp, h } from 'vue';
import { Link, createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const appName = import.meta.env.VITE_APP_NAME || 'Obscode';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
      createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue)
        // .use(vuetify)
        .component('Link',Link)
        .mount(el);
  },
  progress: {
    color: '#4B5563',
  },
});