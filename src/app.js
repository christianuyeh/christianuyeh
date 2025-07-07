import './bootstrap';
import './style.css';
import { createApp } from 'vue';
import App from './App/App.vue';
import router from './router';

import 'animate.css';

const app = createApp(App);
router.beforeEach((to, from, next) => {
    const loader = document.getElementById('preloader');
    if (loader) loader.style.display = 'flex';
    next();
});

router.afterEach(() => {
    const loader = document.getElementById('preloader');
    if (loader) {
        // Add small delay for smooth transition (optional)
        setTimeout(() => {
            loader.style.display = 'none';
        }, 600);
    }
});

app.use(router);
app.mount("#portfolio");