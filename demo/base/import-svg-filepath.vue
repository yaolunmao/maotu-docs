<template>
  <div style="width: 100%;height: 100vh;">
    <mt-edit></mt-edit>
  </div>
</template>
<script setup>
import { MtEdit, leftAsideStore } from 'maotu';
import 'maotu/dist/style.css';
const modulesFiles = import.meta.glob("/public/svgs/**.svg", { eager: true, as: 'raw' })
const register_config = [];
for (const key in modulesFiles) {
  //根据路径获取svg文件名
  const name = key.split("/").pop().split(".")[0];
  register_config.push({
    id: name,
    title: name,
    type: 'svg',
    thumbnail: key.replace('/public', ''),
    svg: modulesFiles[key],
    props: {
      fill: {
        type: 'color',
        val: '#FF0000',
        title: '填充色'
      }
    }
  })
}

leftAsideStore.registerConfig('svg文件', register_config);
</script>