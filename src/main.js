import {createApp} from 'vue'
import App from './App.vue'
import './assets/base.scss'
import './assets/tailwind.css'
// 引入jquery
const $ = require('jquery');
window.$ = $;
window.jQuery = $;
// 创建vue实例
const app = createApp(App)
app.mount('#app')
