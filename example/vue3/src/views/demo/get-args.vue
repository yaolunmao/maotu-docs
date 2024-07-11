<template>
  <div class="w-1/1 h-100vh">
    <mt-edit ref="MtEditRef" @on-return-click="onReturnClick" @on-preview-click="onPreviewClick"></mt-edit>
  </div>
</template>
<script setup lang="ts">
import type { IExportJson } from 'maotu';
import { MtEdit } from 'maotu';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const MtEditRef = ref<InstanceType<typeof MtEdit>>();
const onPreviewClick = (exportJson: IExportJson) => {
  sessionStorage.setItem('exportJson', JSON.stringify(exportJson));
  const routeUrl = router.resolve({
    name: 'preview'
  });
  window.open(routeUrl.href, '_blank');
};

const onReturnClick = () => {
  router.go(-1);
};
onMounted(() => {
  MtEditRef.value?.setImportJson({
    canvasCfg: {
      width: 1920,
      height: 1080,
      scale: 1,
      color: '',
      img: '',
      guide: true,
      adsorp: true,
      adsorp_diff: 5,
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
      enabled: true,
      align: true,
      size: 10
    },
    json: [
      {
        id: 'my-input-JK41oUeSRw',
        title: '我的输入框',
        type: 'vue',
        binfo: {
          left: 290,
          top: 180,
          width: 200,
          height: 30,
          angle: 0
        },
        resize: true,
        rotate: true,
        lock: false,
        active: false,
        hide: false,
        props: {
          modelValue: '输入框'
        },
        tag: 'my-input',
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        },
        events: [
          {
            id: 'yR46gwjgGM',
            type: 'input',
            action: 'customCode',
            change_attr: [],
            custom_code: "console.log('输入框的值是',$args[0])",
            trigger_rule: {
              value: null
            }
          }
        ],
        ports: []
      },
      {
        id: 'text-vue-XVRg9b2li3',
        title: '文字',
        type: 'vue',
        binfo: {
          left: 180,
          top: 70,
          width: 480,
          height: 50,
          angle: 0
        },
        resize: true,
        rotate: true,
        lock: false,
        active: false,
        hide: false,
        props: {
          text: '点击预览后修改输入框的值，查看控制台输出',
          fontFamily: '黑体',
          fontSize: 18,
          fill: '#000000',
          vertical: false
        },
        tag: 'text-vue',
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        },
        events: [],
        ports: []
      }
    ],
    eventList: []
  });
});
</script>

<style scoped></style>
