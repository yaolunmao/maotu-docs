<template>
    <div class="w-1/1 h-100vh">
        <mt-edit ref="MtEditRef" :device-info="test_device_info" @on-return-click="onReturnClick"
            @on-preview-click="onPreviewClick"></mt-edit>
    </div>
</template>
<script setup lang="ts">
import type { IExportJson } from 'maotu';
import { MtEdit } from 'maotu';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const MtEditRef = ref<InstanceType<typeof MtEdit>>();
const test_device_info = ref([
    {
      label: '设备1',
      value: 'd1',
      children: [
        {
          label: '测试点位1',
          value: 'abc'
        },
        {
          label: '测试点位2',
          value: 'def'
        }
      ]
    },
    {
      label: '设备2',
      value: 'd2',
      children: [
        {
          label: '测试点位1',
          value: 'qwe'
        },
        {
          label: '测试点位2',
          value: 'asd'
        }
      ]
    }
  ]);
const onReturnClick = () => {
    router.go(-1);
};
const onPreviewClick = (exportJson: IExportJson) => {
    sessionStorage.setItem('exportJson', JSON.stringify(exportJson));
    const routeUrl = router.resolve({
        name: 'bind-device-preview'
    });
    window.open(routeUrl.href, '_blank');
};
onMounted(() => {
    const res = MtEditRef.value?.setImportJson({
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
                id: 'my-button-EeQAAfRORj',
                title: '我的按钮',
                type: 'vue',
                binfo: {
                    left: 260,
                    top: 140,
                    width: 50,
                    height: 50,
                    angle: 0
                },
                resize: true,
                rotate: true,
                lock: false,
                active: false,
                hide: false,
                props: {
                    text: '按钮',
                    bgColor: '#44B6E7',
                    fontFamily: '黑体'
                },
                tag: 'my-button',
                common_animations: {
                    val: '',
                    delay: 'delay-0s',
                    speed: 'slow',
                    repeat: 'infinite'
                },
                events: [],
                ports: []
            },
            {
                id: 'demo-vXAAncMXWl',
                title: '演示svg文件',
                type: 'svg',
                binfo: {
                    left: 170,
                    top: 90,
                    width: 50,
                    height: 50,
                    angle: 0
                },
                resize: true,
                rotate: true,
                lock: false,
                active: false,
                hide: false,
                props: {
                    fill: '#FF0000'
                },
                tag: 'demo',
                common_animations: {
                    val: '',
                    delay: 'delay-0s',
                    speed: 'slow',
                    repeat: 'infinite'
                },
                events: [],
                ports: [],
                binds: [
                    {
                        id: 'hD6cB0nFVE',
                        pel_id: 'demo-vXAAncMXWl',
                        bind_id: 'abc',
                        bind_attr: 'props.fill.val',
                        triggers: [
                            {
                                id: '0dyt2KxY8I',
                                action: 'changeAttr',
                                rule: {
                                    operator: '=',
                                    value: '#00FF00'
                                },
                                change_attr: [
                                    {
                                        id: 'IxBTWF0TDi',
                                        target_id: 'demo-vXAAncMXWl',
                                        target_attr: 'common_animations.val',
                                        target_value: 'rotate360'
                                    },
                                    {
                                        id: 'Y5f7AVMIu7',
                                        target_id: 'my-button-EeQAAfRORj',
                                        target_attr: 'props.text.val',
                                        target_value: '已启动'
                                    }
                                ],
                                custom_code: ''
                            },
                            {
                                id: 'cNOwcSWaaY',
                                action: 'changeAttr',
                                rule: {
                                    operator: '=',
                                    value: '#FF0000'
                                },
                                change_attr: [
                                    {
                                        id: 'vCjG2V8Mqs',
                                        target_id: 'demo-vXAAncMXWl',
                                        target_attr: 'common_animations.val',
                                        target_value: ''
                                    },
                                    {
                                        id: 'GGL5JWyj8A',
                                        target_id: 'my-button-EeQAAfRORj',
                                        target_attr: 'props.text.val',
                                        target_value: '已关闭'
                                    }
                                ],
                                custom_code: ''
                            }
                        ]
                    }
                ]
            }
        ],
        eventList: []
    });
    if (res) {
        console.log('加载成功');
    }
});
</script>

<style scoped></style>