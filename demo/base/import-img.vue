<template>
    <div style="width: 100%;height: 100vh;">
        <mt-edit></mt-edit>
    </div>
</template>
<script setup>
import { MtEdit,leftAsideStore } from 'maotu';
import 'maotu/dist/style.css';
leftAsideStore.registerConfig('图片', [
  {
    id: 'my-img',
    title: '我的图片',
    type: 'img',
    thumbnail: '/imgs/my-img.png',
    props: {

    }
  }
]);
</script>