# 导入`vue`组件

> 首先我们需要一个`vue`组件，建议您使用以下`vue`组件，以便更好地契合本文档

## 示例`vue`组件

```vue
<template>
  <div style="width: 100%; height: 100%">
    <button class="my-button" style="width: 100%; height: 100%">{{ props.text }}</button>
  </div>
</template>
<script setup>
const props = defineProps({
  text: String,
  bgColor: String,
  fontFamily: String
});
</script>
<style scoped>
.my-button {
  background-color: v-bind('props.bgColor');
  font-family: v-bind('props.fontFamily');
}
</style>

```


将以上`vue`代码片段另存为`my-button.vue`，放到您项目的`src/components`目录下

## 将`vue`组件注册到`mt-edit`

首先要将`vue`组件注册一下，您可以使用以下两种方式注册

### 方式一：在main.ts里面注册

```js
import MyButton from '/src/components/my-button.vue';
const app = createApp(App);
app.component('my-button', MyButton);
app.mount('#app');
```
### 方式二：在引用`mt-edit`的页面里注册
```js
import MyButton from '../../src/components/my-button.vue';
const instance = getCurrentInstance();
instance?.appContext.app.component('my-button', MyButton);
```
::: warning
请注意，您无法使用这种局部注册的方式导入`vue`组件

```js
export default {
  components: {
    ComponentA: ComponentA
  }
  // ...
}
```

这是由于`vue`本身的限制，**局部注册的组件在后代组件中并不可用**

详情请查看https://cn.vuejs.org/guide/components/registration.html#component-registration

:::

我这里使用第二种方式作为演示

```vue
<template>
    <div style="width: 100%;height: 100vh;">
        <mt-edit></mt-edit>
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
```
然后我们会发现左侧图形库已经有了我们刚刚导入的`vue`组件
![](/base/import-vue.png)
- [在线体验](/demo/base/import-vue.md)
- [本页源码](https://github.com/yaolunmao/maotu-docs/blob/main/demo/base/import-vue.vue)


有关于`registerConfig`函数的各项参数说明，请查看[导入细节](/guide/base/import-details.md)