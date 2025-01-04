# mt-preview

预览组件

## 属性

| 属性名      | 说明                               | 默认值 | 类型        |
| ----------- | ---------------------------------- | ------ | ----------- |
| exportJson  | 默认加载的数据                     |        | IExportJson |
| canZoom     | 控制能否拖动 ctrl+鼠标滚轮缩放画布 | true   | boolean     |
| canDrag     | 控制能否通过鼠标左键拖动画布       | true   | boolean     |
| showPopover | 鼠标悬浮时显示图元属性             | true   | boolean     |

## 事件

| 事件名          | 说明         | 类型                                                   |
| --------------- | ------------ | ------------------------------------------------------ |
| onEventCallBack | 触发回调函数 | (type: string, item_id: string, ...args: any[]) =>void |

## 方法

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| setImportJson | 设置要加载的数据 | (exportJson: IExportJson) => boolean |
| setItemAttrByID | 通过 id 设置图元属性 | (id: string, key: string, val: any,options?: ISetItemAttrOptions ) => Promise |
| setItemAttrs | 批量设置图元属性 | (info: { id: string; key: string; val: any; options?: ISetItemAttrOptions}[]) => void |
| setDevicePointByID | 通过 id 设置设备点位数据 | (id: string, val: any,options?: ISetItemAttrOptions ) => void |

## ISetItemAttrOptions

| 属性名 | 说明                 | 类型    | 默认值 |
| ------ | -------------------- | ------- | ------ |
| deep   | 是否同时设置组内图元 | boolean | false  |
