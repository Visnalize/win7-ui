<template>
  <li role="menuitem" :aria-haspopup="hasSubMenu">
    <slot />
  </li>
</template>

<script>
export default {
  name: "WinuiMenuitem",
  computed: {
    hasSubMenu() {
      return this.$slots.default.some((slot) =>
        slot.tag?.includes("WinuiMenu")
      );
    },
  },
};
</script>

<style src="7.css/dist/gui/menu.css"></style>

<style lang="scss" scoped>
[role="menuitem"] {
  ul[role="menu"] > &,
  ul[role="menubar"] > & {
    font: 9pt Segoe UI, sans-serif;
  }
}
</style>
