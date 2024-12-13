import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router/index.js'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faCartShopping, faRotate, faHeart, faMagnifyingGlass, faHeadphones, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faCartShopping, faRotate, faHeart, faMagnifyingGlass, faHeadphones);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
