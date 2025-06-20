import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import vuetify from '././plugins/vuetify.js';
import '@mdi/font/css/materialdesignicons.css';
import GlobalComponents from './plugins/global-components.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(GlobalComponents)

app.mount('#app');
