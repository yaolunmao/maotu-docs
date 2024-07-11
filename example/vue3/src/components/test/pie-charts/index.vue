<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script lang="ts" setup>
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { computed } from 'vue';
use([SVGRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

const props = withDefaults(
  defineProps<{
    title: string;
    seriesName: string;
    seriesData: Array<{ name: string; value: number }>;
  }>(),
  {
    title: '标题',
    seriesName: '详情',
    seriesData: () => []
  }
);

const option = computed(() => {
  return {
    title: {
      text: props.title,
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: props.seriesName,
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: props.seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
});
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
