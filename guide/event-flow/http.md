# http节点

可以通过此节点发起`http`请求

::: warning 注意

`maotu`是以插件形式嵌入到您的项目里的

但通常情况下您的项目都会有`权限校验`、`登录验证`等，还有像是通用的响应拦截，比如说`401`为`登录过期`，`403`为`没有权限`等

这些处理如果都在`maotu`里面配置会很繁琐

所以`maotu`允许您将`您项目`封装的`request`依赖注入到`maotu`里

:::

## 注入自定义request

在引用`mt-preview`的页面使用以下代码注入即可

```vue
provide('mt-request', request);
```
注入之后，`maotu`的`http节点`的请求都由您项目的`request`发出

若您不进行注入，`maotu`将使用默认的`request`发起请求

通常一个`request`的封装类似如下代码：

```ts
import axios from 'axios';
const service = axios.create({
  baseURL: '/',
  timeout: 30000
});

//拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res): any => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    if (code === 401) {
      console.log('登录信息过期');
    } else {
      return Promise.resolve(res.data);
    }
  },
  (error) => {
    console.log('err' + error);
    return Promise.reject(error);
  }
);
export default service;

```