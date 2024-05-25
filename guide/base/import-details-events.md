# 默认执行事件

当我们想让某一图元自带一些可执行事件，而不需要每个图元都去事件里手动配置一遍时，可以在注册的图元的时候给图元的配置增加默认事件

## 配置案例

```js
leftAsideStore.registerConfig('开发测试用', [
  {
    id: 'demo',
    title: '演示svg文件',
    type: 'svg',
    thumbnail: '/svgs/demo.svg',
    svg: demo,
    props: {
      fill: {
        type: 'color',
        val: '#FF0000',
        title: '填充色'
      }
    },
    events: [
      {
        id: '给个随机数',
        type: 'click',
        action: 'customCode',
        change_attr: [],
        custom_code: '$mtElMessage.success($item_info.id)',
        trigger_rule: {
          value: null
        }
      }
    ]
  }
]);
```

## 属性说明

| 属性名 | 属性解释                     | 是否必填 | 备注           |
| ------ | ---------------------------- | -------- | -------------- |
| id     | 事件的标识 值必须唯一        | 是       |  |
| type  | 事件类型 | 是       | 可选的值有click、dblclick、mouseover、mouseout |
| action | 事件行为                   | 是       | 可选的值有changeAttr和customCode。changeAttr为属性更改，customCode为自定义代码 |
| change_attr | 当action为changeAttr时会读取此配置 | 是 | 一般注册时用不到，如果有特殊需求可以在编辑器页面绘制一个图元并且配置好其事件，在导出json里面查看 |
| custom_code | 当action为customCode时会读取此配置 | 是 | 里面写js代码即可 |
| trigger_rule | 触发规则 | 是 | 一般注册时用不到，如果有特殊需求可以在编辑器页面绘制一个图元并且配置好其事件，在导出json里面查看 |