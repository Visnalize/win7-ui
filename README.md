# win7-ui

![beta](https://img.shields.io/badge/Beta-Unstable-orange)
[![npm](https://img.shields.io/npm/v/win7-ui)](http://npm.im/win7-ui)
![npm](https://img.shields.io/npm/dt/win7-ui)

Vue2 component library for recreating Windows 7 UI.

Live Demo: [__Win7 Simu__](https://win7simu.visnalize.com/)

## Quick start

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
