<template>
  <div>
    <div>
      模拟websocket消息:
      <el-button @click="changePoint(1)">将点位改成1</el-button>
      <el-button @click="changePoint(2)">将点位改成2</el-button>
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
const changePoint = (point: number) => {
  MtPreviewRef.value
    ?.setItemAttrByID('a-effect-b-bSKckawcxg', 'props.point.val', point)
    .then((res) => {
      console.log(res);
    });
    // 其实如果不想通过全局事件判断 也可以在socket接收消息里判断图元类型，然后根据图元类型做相应的操作 例如下面注释的代码
    // if(type=='xxx'){
    //   // 如果要将xxx图元的点位设置成1 那么就将其隐藏属性设置为true
    //   if(point=1){
    //     setItemAttrByID('a-effect-b-bSKckawcxg', 'props.hide', true)
    //   }
    //   else if(point=2){
    //     setItemAttrByID('a-effect-b-bSKckawcxg', 'props.hide', false)
    //   }
    // }
}
onMounted(() => {
  MtPreviewRef.value?.setImportJson(JSON.parse(sessionStorage.getItem('exportJson') as any));
});
</script>
