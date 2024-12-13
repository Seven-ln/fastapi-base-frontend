
import * as echarts from 'echarts/core';
import {
  CanvasRenderer,
  GaugeChart,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
} from 'echarts/charts';
import {
  DataZoomComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';

// 导入图表组件
import Chart from './chart/index.vue';
//import Breadcrumb from './breadcrumb/index.vue';

// 手动引入 ECharts 模块以减少打包大小
echarts.use([
  CanvasRenderer,
  GaugeChart,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
]);

// 定义插件
const plugin = {
  install(app) {
    app.component('Chart', Chart);
    //app.component('Breadcrumb', Breadcrumb);
  },
};

export default plugin;