import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'
import FooterComp from '@/components/FooterComp.vue'
import NavbarComp from '@/components/NavbarComp.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('FooterComp', FooterComp);
app.component('NavbarComp', NavbarComp);

app.use(createPinia())
app.use(router)

app.mount('#app')
