import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store';
import axios from 'axios';
import router from './routes';

const app = createApp(App);
app.use(store);
app.use(router);

app.provide('axios', axios);

app.mount('#app');