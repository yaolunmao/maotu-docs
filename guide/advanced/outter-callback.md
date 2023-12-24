# 回调外部项目函数
`mt-preview`提供`onEventCallBack`事件，可以接收图像主动触发事件传递过来的参数，例如我们想点击一个图像去打开插件外部项目中的一个提示，就可以按照如下步骤去实现

1. 首先在引用`mt-preview`的页面上注册回调函数
   ```vue
   <template>
   	<mt-preview ref="MtPreviewRef" @on-event-call-back="onEventCallBack"></mt-preview>
   </template>
    <script setup lang="ts">
   	import { MtPreview } from '@/export';
       import { ref } from 'vue';
       import { ElMessage } from 'element-plus';
       const MtPreviewRef = ref<InstanceType<typeof MtPreview>>();
       const onEventCallBack = (type: string, item_id: string) => {
       if (type == 'test-dialog') {
       		ElMessage.success(`获取到了id:${item_id}`);
       	}
       };
   </script>
   
   ```

2. 选中一个图形，添加一个自定义事件代码事件
   ![](/advanced/event-callback.png)

3. 编写如下代码

   ```js
   $mtEventCallBack('test-dialog',$item_info.id)
   ```
   ![](/advanced/event-callback1.png)

4. 然后进入到预览页点击图形即可触发外部事件
    ![](/advanced/event-callback2.png)
    
:::tip
onEventCallBack的类型是`(type: string, item_id: string, ...args: any[]) =>void`，这意味着您可以传递无限个参数
:::

[在线预览](http://mt-edit.yaolm.top/event-callback)