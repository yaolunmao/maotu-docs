# 安装与集成

下面的文档将介绍如何将mt-edit嵌入到已有项目

::: warning
mt-edit当前处于预览版，若干功能正在开发中，请勿直接将其用于生产环境
:::

## 安装依赖

```shell
# NPM
$ npm install maotu

# Yarn
$ yarn add maotu

# pnpm
$ pnpm install maotu
```

如果网络环境不好导致包无法下载，请使用如下命令进行依赖安装

```shell
$ pnpm install maotu --registry https://registry.npm.taobao.org
```

## 导入到已有项目

> app.vue

```vue
<template>
  <div style="width: 100%;height: 100vh;">
    <mt-edit></mt-edit>
  </div>
</template>
<script setup lang="ts">
import { MtEdit } from 'maotu';
import 'maotu/dist/style.css';
</script>
```
然后运行项目，出现以下页面则代表导入成功了

![](/get-started-quickly/install.png)
- [在线体验](/demo/get-started-quickly/install.md)

导入之后您可能会发现左侧图形库没有任何东西，这是因为`mt-edit`本身是不包含图形库的，让我们继续来看如何导入自己的图形库
