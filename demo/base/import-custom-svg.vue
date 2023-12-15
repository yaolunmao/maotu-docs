<template>
    <div style="width: 100%;height: 100vh;">
        <mt-edit></mt-edit>
    </div>
</template>
<script setup>
import { MtEdit, leftAsideStore } from 'maotu';
import 'maotu/dist/style.css';
import { getCurrentInstance } from 'vue';
import CustomDemo from '../../src/components/custom-demo.vue';
const instance = getCurrentInstance();
instance?.appContext.app.component('custom-demo', CustomDemo);

leftAsideStore.registerConfig('自定义svg', [
{
    id: 'custom-demo',
    title: '自定义svg',
    type: 'custom-svg',
    thumbnail: '/svgs/demo.svg',
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
  }
]);
</script>