# mt-edit

编辑器组件



## 事件

| 事件名         | 说明                           | 类型                              |
| -------------- | ------------------------------ | --------------------------------- |
| onPreviewClick | 当点击顶部工具栏预览按钮时触发 | (exportJson: IExportJson) => void |
| onReturnClick  | 当点击顶部工具栏返回按钮时触发 | onReturnClick: () => void         |
| onSaveClick    | 当点击顶部工具栏保存按钮时触发 | (exportJson: IExportJson) => void |


## 方法

| 方法名        | 说明             | 类型                                 |
| ------------- | ---------------- | ------------------------------------ |
| setImportJson | 设置要加载的数据 | (exportJson: IExportJson) => boolean |

## 完整示例

```vue
<template>
  <div class="w-1/1 h-100vh">
    <mt-edit
      ref="MtEditRef"
      @on-preview-click="onPreviewClick"
      @on-return-click="onReturnClick"
      @on-save-click="onSaveClick"
    ></mt-edit>
  </div>
</template>
<script setup lang="ts">
import { MtEdit } from 'maotu';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const MtEditRef = ref<InstanceType<typeof MtEdit>>();
const onPreviewClick = (exportJson: any) => {
  console.log(exportJson, '这是要传给预览组件的数据');
};
const onReturnClick = () => {
  router.go(-1);
};
const onSaveClick = (exportJson: any) => {
  console.log(exportJson, '这是要保存的数据');
};
onMounted(() => {
  MtEditRef.value?.setImportJson({
    canvasCfg: {
      width: 1920,
      height: 1080,
      scale: 1,
      color: '#000000',
      img: '',
      guide: true,
      adsorp: true,
      adsorp_diff: 3,
      transform_origin: {
        x: 0,
        y: 0
      },
      drag_offset: {
        x: 0,
        y: 0
      }
    },
    gridCfg: {
      enabled: false,
      align: true,
      size: 10
    },
    json: []
  });
});
</script>

<style scoped></style>

```

