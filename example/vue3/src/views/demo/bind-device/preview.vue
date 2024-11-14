<template>
  <div>
    <div>
      模拟websocket消息:
      <el-button @click="testStart">启动设备</el-button>
      <el-button @click="testStop">关闭设备</el-button>
    </div>

    <mt-preview ref="MtPreviewRef" @on-event-call-back="onEventCallBack"></mt-preview>
  </div>

</template>
<script setup lang="ts">
import { MtPreview } from 'maotu';
import { onMounted, ref } from 'vue';
import { ElMessage,ElButton } from 'element-plus';
const MtPreviewRef = ref<InstanceType<typeof MtPreview>>();
const onEventCallBack = (type: string, item_id: string) => {
  console.log(type, item_id);

  if (type == 'test-dialog') {
    ElMessage.success(`获取到了id:${item_id}`);
  }
};
const testStart = () => {
  MtPreviewRef.value?.setDevicePointByID('abc', '#00FF00');
};
const testStop = () => {
  MtPreviewRef.value?.setDevicePointByID('abc', '#FF0000');
};
onMounted(() => {
  MtPreviewRef.value?.setImportJson(JSON.parse(sessionStorage.getItem('exportJson') as any));
});
</script>
