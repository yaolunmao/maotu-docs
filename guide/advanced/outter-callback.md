# 回调外部项目函数
`mt-preview`提供`onEventCallBack`事件，可以接收图像主动触发事件传递过来的参数，例如我们想点击一个图像去打开插件外部项目中的一个弹框，就可以按照如下步骤去实现

1. 首先在引用`mt-preview`的页面上注册回调函数
```vue
<template>
  <div>
    <mt-preview ref="MtPreviewRef" @on-event-call-back="onEventCallBack"></mt-preview>
    <el-dialog title="弹框测试" v-model="dialog_visible" width="50%">
      <div>图元的id是{{ pel_item.id }}</div>
      <div>图元的坐标是{{ pel_item.binfo.left }},{{ pel_item.binfo.top }}</div>
      <button @click="testAddX">x轴坐标加1</button>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { MtPreview } from '@/export';
import { onMounted, ref } from 'vue';
import { ElMessage, ElDialog } from 'element-plus';
const MtPreviewRef = ref<InstanceType<typeof MtPreview>>();
const pel_item = ref();
const dialog_visible = ref(false);
const onEventCallBack = (type: string, item: any) => {
  if (type == 'test-dialog') {
    pel_item.value = item;
    dialog_visible.value = true;
  }
};
const testAddX = () => {
  pel_item.value.binfo.x += 1;
  MtPreviewRef.value
    ?.setItemAttrByID(pel_item.value.id, 'binfo.left', pel_item.value.binfo.left + 1)
    .then((res) => {
      console.log(res);
    });
};
onMounted(() => {
  MtPreviewRef.value?.setImportJson(JSON.parse(sessionStorage.getItem('exportJson') as any));
});
</script>
```

2. 选中一个图形，添加一个自定义事件代码事件
   ![](/advanced/event-callback.png)

3. 编写如下代码

   ```js
   $mtEventCallBack('test-dialog',$item_info)
   ```
   ![](/advanced/event-callback1.png)

4. 然后进入到预览页点击图形即可触发外部事件
    ![](/advanced/event-callback2.png)
    
:::tip
onEventCallBack的类型是`(type: string, item_id: string, ...args: any[]) =>void`，这意味着您可以传递无限个参数
:::

[在线预览](http://mt-edit.yaolm.top/event-callback)