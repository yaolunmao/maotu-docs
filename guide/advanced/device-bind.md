# 设备绑定

`maotu`提供了`deviceBind`插槽可供您在插件外部将图像与真实设备绑定，从而建立一个映射关系，您后续可以通过获取真实的设备状态，然后通过调用`mt-preview`组件的`setItemAttrByID`或者`setItemAttrs`方法去更新图像的属性，从而达到一个实时的显示效果，如果您希望点击图像去操作真实设备这种，可以参考[回调外部项目函数](/guide/advanced/outter-callback)

以下是示例代码

```vue
<script setup lang="ts">
import { MtEdit } from '@/export';
</script>

<template>
  <div class="w-1/1 h-100vh">
    <mt-edit>
      <template #deviceBind="{ item }">
        <div>{{ item.id }}</div>
      </template>
    </mt-edit>
  </div>
</template>

<style scoped></style>

```

当我点击画布内图像时，插槽内部便可以获取到图像信息

![](/advanced/device-bind.png)

我在[集成至若依示例项目](http://101.200.230.128:8888/)中封装了一个[设备绑定组件](https://gitee.com/yaolunmao/maotu-ry/blob/main/ruoyi-ui-vue3/src/views/webtopo/edit/device-bind.vue)，可供参考。