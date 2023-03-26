import './bootstrap';

import {createApp} from 'vue'

import Index from './components/catalogue/Index.vue'

const app = createApp({})
app.component('post-index', Index)
app.mount('#app')