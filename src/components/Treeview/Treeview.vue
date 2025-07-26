<template>
  <ul class="tree-view winui-treeview">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "WinuiTreeview",
};
</script>

<style lang="scss" scoped>
::v-deep.winui-treeview ul {
  line-height: normal;
}
</style>
