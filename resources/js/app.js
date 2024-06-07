import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/services/vue-router/router';

createApp(App).use(router).mount('#app');
