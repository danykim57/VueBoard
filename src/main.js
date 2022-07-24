import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router' // 라우터 추가하고 
import axios from 'axios'

const app = createApp(App);

app.use(router); // 사용 설정 하기
app.$axios = axios
app.mount('#app')