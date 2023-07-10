import 'primevue/resources/themes/lara-light-indigo/theme.css';
import './global.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './components/app.vue';

const app = createApp( App );

app.use( PrimeVue );

app.mount('#app');
