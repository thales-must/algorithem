import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import vuetify from '@/plugin/vuetify';
import '@/styles/main.scss';


createApp(App)
.use(vuetify)
.use(createPinia())
.use(router)
.mount('#app');
