## 导入图片

导入图片就比较简单了，请将以下图片另存为`my-img.png`，放到您项目的`public/imgs`目录下

![](/imgs/my-img.png)

## 注册图片到`mt-edit`

```vue
<template>
    <div style="width: 100%;height: 100vh;">
        <mt-edit></mt-edit>
    </div>
</template>
<script setup>
import { MtEdit,leftAsideStore } from 'maotu';
import 'maotu/dist/style.css';
leftAsideStore.registerConfig('图片', [
  {
    id: 'my-img',
    title: '我的图片',
    type: 'img',
    thumbnail: '/imgs/my-img.png',
    props: {

    }
  }
]);
</script>
```
然后我们会发现左侧图形库已经有了我们刚刚导入的图片了
![](/base/import-img.png)
- [在线体验](/demo/base/import-img.md)
- [本页源码](https://github.com/yaolunmao/maotu-docs/blob/main/demo/base/import-img.vue)
## 导入整个文件夹

与[导入svg的导入整个文件夹](/guide/base/import-svg.html#导入整个文件夹)一致，这里就不过多赘述了

有关于`registerConfig`函数的各项参数说明，请查看[导入细节](/guide/base/import-details.md)