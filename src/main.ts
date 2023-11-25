import './assets/main.css'
import 'amfe-flexible' 
import { createApp } from 'vue'


import App from './App.vue'
import router from './router'
import { Lazyload  } from 'vant';
import * as echarts from 'echarts/core';
import { GaugeChart, RadarChart } from 'echarts/charts';
import {
    TitleComponent,
    // TooltipComponent,
    // GridComponent,
    // DatasetComponent,
    TransformComponent
  } from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
    TitleComponent,
    // TooltipComponent,
    // GridComponent,
    // DatasetComponent,
    TransformComponent,
    GaugeChart,
    RadarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
  ]);
const app = createApp(App)
app.config.globalProperties.$echarts = echarts;
app.use(router);
app.use(Lazyload);
app.mount('#app')
