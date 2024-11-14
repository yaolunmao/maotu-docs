# 设备绑定

> `maotu v0.5.0`之后版本内置了设备绑定组件，绑定关系由前端管理，如果你想用后端来管理绑定关系，请参考[`v0.5.0`](/guide/advanced/device-bind.html#maotu版本0-5-0之前版本的使用说明)以前的使用说明

## `maotu`版本`0.5.0`之后版本的使用说明

首先在引用编辑器组件`mt-edit`时，需要将设备信息传递给编辑器组件，设备信息的格式如下

```js
 [
    {
      label: '测试点位1',
      value: 'abc'
    },
    {
      label: '测试点位2',
      value: 'def'
    }
  ]

```
其中`label`为设备的显示名称,`value`为设备点位的`唯一标识`

代码结构应该如下

```vue
<template>
  <div>
    <mt-edit
      :device-info="testDeviceInfo"
    ></mt-edit>
  </div>
</template>
<script setup lang="ts">
const testDeviceInfo = ref([
    {
      label: '测试点位1',
      value: 'abc'
    },
    {
      label: '测试点位2',
      value: 'def'
    }
  ]
);
</script>
```
此时将图元拖动至画布中，选中图元，在右侧绑定面板中新增一个绑定关系，即可选择刚才传递过来的设备

![](/advanced/device-bind1.png)

当设置好了设备点位与图元属性后，`maotu`框架会将设备与图元建立好映射关系。在预览图像的时候，只需要调用预览组件`mt-preview`的`setDevicePointByID`方法，设置设备点位的最新值，`maotu`框架会根据绑定关系自动更新对应图元的属性.

整体代码结构如下：

```vue
<template>
    <mt-preview ref="svgPreviewRef" :export-json="export_json"></mt-preview>
</template>
<script setup lang="ts">
import { MtPreview } from 'maotu';
const svgPreviewRef = ref<InstanceType<typeof MtPreview>>();

svgPreviewRef.value.setDevicePointByID('abc', '#00FF00');

</script>
```
### 触发器

当我们一个设备的点位会影响多个图元的状态时，将多个图元都与该设备点位绑定会比较繁琐，此时我们可以使用触发器来进行配置

例如，当我们把某个设备的状态设置为启动，此时要将对应图元颜色属性设置为绿色，将某个文本设置为`已启动`，就可以使用触发器来进行配置

### 绑定示例

我这里没有合适的图元，所以拿颜色和设备点位进行了绑定，真实使用请根据自己的使用场景来

- [在线体验](http://mt-edit.yaolm.top/bind-device)
- [使用方式源码](https://github.com/yaolunmao/maotu-docs/blob/main/example/vue3/src/views/demo/bind-device/edit.vue)

## `maotu`版本`0.5.0`之前版本的使用说明
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