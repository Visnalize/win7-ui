# Getting started

__Win7 UI__ is a component library for creating user interface elements in Windows 7 style in web apps built from Vue. It leverages the [7.css](https://khang-nd.github.io/7.css/) package underneath, which is a CSS-only framework with the same purpose.

:::warning Note
This library only supports __Vue 2.x__ and assumes that you are already familiar with it, if not, please check out its [documentation](https://v2.vuejs.org/guide/).
:::

<Misc-Ad />

## Installation

In your Vue project, run the following command:

```sh
npm install win7-ui
# or
yarn add win7-ui
```

In your `main.js` or `index.js`, add the following:

```js
import Winui from "win7-ui";
import "win7-ui/lib/style.css";
...
Vue.use(Winui);
...
```

The components will then be available globally in your project with the prefix __`winui-`__, an example usage as below:

```vue{2}
<template>
  <winui-button @click="doSomething">Hello world!</winui-button>
</template>

<script>
export default {
  methods: {
    doSomething() {}
  }
}
</script>

<style>
...
</style>
```

For more specific instructions on each component, check out the [component pages](../components/README.md).
