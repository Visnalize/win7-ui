# win7-ui

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
...
Vue.use(Winui);

new Vue({
  ...
}).$mount("#app");
```

```html
<template>
  <winui-button @click="doSomething">Hello world!</winui-button>
  <winui-dropdown :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        "5 - Incredible!",
        "4 - Great!",
        "3 - Pretty good",
        "2 - Not so great",
        "1 - Unfortunate",
      ]
    }
  },
  methods: {
    doSomething() {}
  }
}
</script>

<style>
...
</style>
```
