<template>
  <ul class="winui-menu" role="menu">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "WinuiMenu",
};
</script>

<style scoped>
.winui-menu hr {
  border: 0;
  box-shadow: inset 0 1px #00000026, inset 0 -1px #fff;
  box-sizing: border-box;
  height: 2px;
  margin: 3px 0 2px 30px;
}
</style>
