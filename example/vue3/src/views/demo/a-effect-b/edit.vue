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
const onReturnClick = () => {
    router.go(-1);
};
const onPreviewClick = (exportJson: IExportJson) => {
  sessionStorage.setItem('exportJson', JSON.stringify(exportJson));
  const routeUrl = router.resolve({
    name: 'a-effect-b-preview'
  });
  window.open(routeUrl.href, '_blank');
};
onMounted(() => {
    const res = MtEditRef.value?.setImportJson({
        "canvasCfg": {
            "width": 1920,
            "height": 1080,
            "scale": 1,
            "color": "#000000",
            "img": "",
            "guide": true,
            "adsorp": true,
            "adsorp_diff": 3,
            "transform_origin": {
                "x": 0,
                "y": 0
            },
            "drag_offset": {
                "x": -333,
                "y": -4
            }
        },
        "gridCfg": {
            "enabled": false,
            "align": true,
            "size": 10
        },
        "json": [
            {
                "id": "a-effect-b-bSKckawcxg",
                "title": "演示当属性a被改变后修改属性b的值所用组件",
                "type": "svg",
                "binfo": {
                    "left": 972,
                    "top": 394,
                    "width": 50,
                    "height": 50,
                    "angle": 0
                },
                "resize": true,
                "rotate": true,
                "lock": false,
                "active": false,
                "hide": false,
                "props": {
                    "fill": "#FF0000",
                    "point": 0
                },
                "tag": "a-effect-b",
                "common_animations": {
                    "val": "",
                    "delay": "delay-0s",
                    "speed": "slow",
                    "repeat": "infinite"
                },
                "events": [],
                "ports": []
            },
            {
                "id": "text-vue-5xWTcXDHum",
                "title": "文字",
                "type": "vue",
                "binfo": {
                    "left": 749,
                    "top": 97,
                    "width": 435,
                    "height": 50,
                    "angle": 0
                },
                "resize": true,
                "rotate": true,
                "lock": false,
                "active": false,
                "hide": false,
                "props": {
                    "text": "事件配置到了全局事件里",
                    "fontFamily": "黑体",
                    "fontSize": 18,
                    "fill": "#FFF700",
                    "vertical": false
                },
                "tag": "text-vue",
                "common_animations": {
                    "val": "",
                    "delay": "delay-0s",
                    "speed": "slow",
                    "repeat": "infinite"
                },
                "events": [],
                "ports": []
            },
            {
                "id": "text-vue-MDE68JgqVH",
                "title": "文字",
                "type": "vue",
                "binfo": {
                    "left": 1218,
                    "top": 140,
                    "width": 322,
                    "height": 50,
                    "angle": 0
                },
                "resize": true,
                "rotate": true,
                "lock": false,
                "active": false,
                "hide": false,
                "props": {
                    "text": "点击右上角预览查看效果",
                    "fontFamily": "黑体",
                    "fontSize": 18,
                    "fill": "#FFF700",
                    "vertical": false
                },
                "tag": "text-vue",
                "common_animations": {
                    "val": "",
                    "delay": "delay-0s",
                    "speed": "slow",
                    "repeat": "infinite"
                },
                "events": [],
                "ports": []
            }
        ],
        "eventList": [
            {
                "id": "mtPllG5fA9",
                "type": "setItemAttrByID",
                "action": "changeAttr",
                "change_attr": [
                    {
                        "id": "nbg6VLO1mX",
                        "target_id": "a-effect-b-bSKckawcxg",
                        "target_attr": "hide",
                        "target_value": true
                    }
                ],
                "custom_code": "",
                "trigger_rule": {
                    "trigger_id": "a-effect-b-bSKckawcxg",
                    "operator": "=",
                    "value": {
                        "type": "number",
                        "val": 1
                    }
                }
            },
            {
                "id": "5QYbTJfM1D",
                "type": "setItemAttrByID",
                "action": "changeAttr",
                "change_attr": [
                    {
                        "id": "zznZX8sktn",
                        "target_id": "a-effect-b-bSKckawcxg",
                        "target_attr": "hide",
                        "target_value": false
                    }
                ],
                "custom_code": "",
                "trigger_rule": {
                    "trigger_id": "a-effect-b-bSKckawcxg",
                    "operator": "=",
                    "value": {
                        "type": "number",
                        "val": 2
                    }
                }
            }
        ]
    });
    if (res) {
        console.log('加载成功');
    }
});
</script>

<style scoped></style>