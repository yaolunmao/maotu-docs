# 全局事件

全局事件位于页面配置的右侧，当我们使用[外部控制图形属性](/guide/advanced/outter-control)时触发

![](/definition/1.png)

## 使用场景

[外部控制图形属性](/guide/advanced/outter-control)可以从插件外部控制图元的状态，但我们系统内的图元往往都有相互关联。
比如说我修改了A图元的颜色，此时需要将A图元同时设置成闪烁状态，并且将B图元设置为旋转状态，就可以使用全局事件来进行配置

:::tip 提示
在`maotu`版本`0.5.0`以后，可以通过设备自带的绑定关系进行该场景实现，参考[设备绑定](/guide/advanced/device-bind)
:::

### 示例

我在[vue3示例项目](https://github.com/yaolunmao/maotu-docs/tree/main/example/vue3)里面写了一个[demo](https://github.com/yaolunmao/maotu-docs/tree/main/example/vue3/src/views/demo/a-effect-b)，可供参考
