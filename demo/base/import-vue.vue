<template>
    <div style="width: 100%;height: 100vh;">
        <mt-edit></mt-edit>
        <my-button text="按钮" bgColor="#44B6E7" fontFamily="黑体"></my-button>
    </div>
</template>
<script setup>
import { MtEdit, leftAsideStore } from 'maotu';
import { getCurrentInstance } from 'vue';
import 'maotu/dist/style.css';
import MyButton from '../../src/components/my-button.vue';
const instance = getCurrentInstance();
instance?.appContext.app.component('my-button', MyButton);

leftAsideStore.registerConfig('vue组件', [
    {
        id: 'my-button',
        title: '我的按钮',
        type: 'vue',
        thumbnail: '/base/my-button.svg',//缩略图请自己指定一个 图片还是svg都可以
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
    }
]);
</script>