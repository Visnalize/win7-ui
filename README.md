# win7-ui ⚠ beta

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
