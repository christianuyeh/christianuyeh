import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue';
import App from './App/App.vue';
import router from './router';

import 'animate.css';

const app = createApp(App);
app.use(router);
app.mount("#portfolio");
