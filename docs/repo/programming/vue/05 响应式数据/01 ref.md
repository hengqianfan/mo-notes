# Ref

- 基本数据类型

- **`ref()` 包裹的数据会变成响应式数据**

- 即是，你在脚本里改变数据时，页面中对应的数据也会对应改变。

> **但是，注意变动数据时，在 `<script>` 要加上 `.value` ，但在 ``<template>`` 中修改不需要加。**


::: code-group

```javascript [javascript]
import { ref } from "vue";
const username = ref('momo')
username.value = 'xoxo'
```

```html [template]
<div>
    {{username}}
</div>
```


:::

