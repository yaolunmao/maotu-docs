<script setup lang="ts">
import { RouterView } from 'vue-router';
import { leftAsideStore } from 'maotu';
import demo from '/svgs/demo.svg?raw';
import demo_custom_port from './assets/隔离开关-刀闸.svg?raw';

leftAsideStore.registerConfig('开发测试用', [
  {
    id: 'demo',
    title: '演示svg文件',
    type: 'svg',
    thumbnail: '/svgs/demo.svg',
    svg: demo,
    props: {
      fill: {
        type: 'color',
        val: '#FF0000',
        title: '填充色'
      }
    }
  },
  {
    id: 'my-button',
    title: '我的按钮',
    type: 'vue',
    thumbnail: '/svgs/my-button.svg',
    props: {
      text: {
        type: 'input',
        val: '按钮',
        title: '文本'
      },
      bgColor: {
        type: 'color',
        val: '#44B6E7',
        title: '背景色'
      },
      fontFamily: {
        title: '字体',
        type: 'select',
        val: '黑体',
        options: [
          {
            value: '黑体',
            label: '黑体'
          },
          {
            value: '宋体',
            label: '宋体'
          }
        ]
      }
    }
  },
  {
    id: 'my-input',
    title: '我的输入框',
    type: 'vue',
    thumbnail: '/svgs/my-input.svg',
    width: 200,
    height: 30,
    props: {
      modelValue: {
        type: 'input',
        val: '输入框',
        title: '文本'
      }
    }
  },
  {
    id: 'custom-demo',
    title: '自定义svg',
    type: 'custom-svg',
    thumbnail: '/svgs/demo.svg',
    width: 200,
    height: 200,
    props: {
      circleFill: {
        type: 'color',
        val: '#FF0000',
        title: '圆颜色'
      },
      pathFill1: {
        type: 'color',
        val: '#00FF00',
        title: '线1颜色'
      },
      pathFill2: {
        type: 'color',
        val: '#0000FF',
        title: '线2颜色'
      },
      pathFill3: {
        type: 'color',
        val: '#FFFF00',
        title: '线3颜色'
      },
      showLine2: {
        type: 'switch',
        val: true,
        title: '显示线2'
      }
    }
  },
  {
    id: 'pie-charts',
    title: 'echarts饼图',
    type: 'vue',
    thumbnail: '/svgs/pie-charts.svg',
    width: 400,
    height: 350,
    props: {
      title: {
        title: '标题',
        type: 'input',
        val: '默认标题'
      },
      seriesName: {
        title: '详情',
        type: 'input',
        val: '详情标题'
      },
      seriesData: {
        title: '数据',
        type: 'jsonEdit',
        val: [
          {
            value: 1048,
            name: '办公楼A'
          },
          {
            value: 735,
            name: '办公楼B'
          },
          {
            value: 580,
            name: '保安室'
          },
          {
            value: 484,
            name: '地下车库'
          },
          {
            value: 300,
            name: '食堂'
          }
        ]
      }
    }
  },
  {
    id: 'demo-custom-port',
    title: '演示自定义锚点-隔离开关',
    type: 'svg',
    thumbnail: 'data:image/svg+xml;utf8,' + encodeURIComponent(demo_custom_port),
    svg: demo_custom_port,
    height: 120,
    props: {
      stroke: {
        type: 'color',
        val: '#00ff00',
        title: '边框色'
      }
    },
    ports: [
      {
        type: 't1',
        position: 'leftTop',
        offset: {
          x: {
            value: 80,
            unit: '%'
          },
          y: {
            value: 0,
            unit: '%'
          }
        }
      },
      {
        type: 'b1',
        position: 'leftBottom',
        offset: {
          x: {
            value: 80,
            unit: '%'
          },
          y: {
            value: 0,
            unit: '%'
          }
        }
      }
    ]
  },
  {
    id: 'info-demo-vue',
    title: '演示自定义vue组件内获取图元信息',
    type: 'vue',
    thumbnail: '/svgs/my-input.svg',
    width: 350,
    height: 50,
    props: {}
  }
]);
</script>

<template>
  <RouterView />
</template>
