
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import 'virtual:uno.css';
import 'maotu/dist/style.css'
import MyButton from '@/components/test/my-button/index.vue';
import MyInput from '@/components/test/my-input/index.vue';
import CustomDemo from '@/components/test/custom-demo/index.vue';
import PieCharts from '@/components/test/pie-charts/index.vue';
import InfoDemoVue from '@/components/test/info-demo-vue/index.vue';
const app = createApp(App)

app.use(router)
app.component('my-input', MyInput);
app.component('my-button', MyButton);
app.component('custom-demo', CustomDemo);
app.component('pie-charts', PieCharts);
app.component('info-demo-vue', InfoDemoVue);
app.mount('#app')
