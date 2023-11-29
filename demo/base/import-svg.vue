<template>
    <div style="width: 100%;height: 100vh;">
        <mt-edit></mt-edit>
    </div>
</template>
<script setup>
import { MtEdit,leftAsideStore } from 'maotu';
import 'maotu/dist/style.css';
import demo from '/svgs/demo.svg?raw';
leftAsideStore.registerConfig('svg文件', [
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
  }
]);
</script>