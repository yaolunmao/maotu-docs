# 自定义吸附点位置

如果在配置图元属性时不设置图元的`ports`属性，`maotu`会默认给图元增加四个吸附锚点，分别在四条边的的中点，例如下面这样

![](/base/import-details-ports.png)

但是向上面的图形我们可能只需要两个吸附锚点，而且锚点位置也不是居中的，此时便可以使用`ports`属性进行自定义锚点配置

例如这样

```js{14-43}
  {
    id: 'demo-custom-port',
    title: '演示自定义锚点-隔离开关',
    type: 'svg',
    thumbnail: 'data:image/svg+xml;utf8,' + encodeURIComponent(demo_custom_port),
    svg: demo_custom_port,
    props: {
      stroke: {
        type: 'color',
        val: '#00ff00',
        title: '边框色'
      }
    },
    ports: [
      {
        type: 't1',
        position: 'leftTop',
        offset: {
          x: {
            value: 80,
            unit: '%'
          },
          y: {
            value: 0,
            unit: '%'
          }
        }
      },
      {
        type: 'b1',
        position: 'leftBottom',
        offset: {
          x: {
            value: 80,
            unit: '%'
          },
          y: {
            value: 0,
            unit: '%'
          }
        }
      }
    ]
  }
```
自定义吸附锚点位置后效果如下图所示

![](/base/import-details-ports2.png)

## 属性说明

| 属性名 | 属性解释                     | 是否必填 | 备注           |
| ------ | ---------------------------- | -------- | -------------- |
| type     | 类型标识 必须唯一        | 是       | 禁止使用`tc`、`lc`、`bc`、`rc`等系统占用类型 |
| position  | 锚点位置计算相对于哪个点 | 是       | 可选的值有leftTop、leftBottom、rightTop |
| action | 事件行为                   | 是       | 可选的值有changeAttr和customCode。changeAttr为属性更改，customCode为自定义代码 |
| offset | 锚点相对于x轴和y轴的偏移量配置 | 是 | |

### offset说明

需分别设置x轴和y轴的偏移量

| 属性名 | 属性解释                     | 是否必填 | 备注           |
| ------ | ---------------------------- | -------- | -------------- |
| value     | 偏移量的值，数字类型       | 是       | 当unit为`%`时代表百分比，当unit为`px`时代表固定像素 |
| unit  | 偏移单位 | 是       | 可选的值有`%`、`px` |