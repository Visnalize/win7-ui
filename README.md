# win7-ui

[![npm](https://img.shields.io/npm/v/win7-ui)](http://npm.im/win7-ui)
[![npm](https://img.shields.io/npm/dt/win7-ui)](http://npm.im/win7-ui)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/win7-ui)](https://bundlephobia.com/result?p=win7-ui)

Vue2 component library for recreating Windows 7 UI.

## 🚀 Quick start

```sh
npm i win7-ui
# or
yarn add win7-ui
```

```js
// main.js or index.js
import Vue from "vue";
import Winui from "win7-ui";
import "win7-ui/lib/style.css";
...
Vue.use(Winui);

new Vue({
  ...
}).$mount("#app");
```

```html
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

## 📚 Documentation

_Refer to the [official site](https://win7ui.visnalize.com/)_

## 📝 Changelog

_Refer to [Releases](https://github.com/Visnalize/win7-ui/releases)_

## 📺 Showcase

- [__Win7 Simu__](https://win7simu.visnalize.com/)
