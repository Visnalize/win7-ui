<template>
  <winui-menu>
    <winui-menuitem :option="radio('lg')" v-model="radioSelected">
      Large icons
    </winui-menuitem>
    <winui-menuitem :option="radio('md')" v-model="radioSelected">
      Medium icons
    </winui-menuitem>
    <winui-menuitem :option="radio('sm')" v-model="radioSelected">
      Small icons
    </winui-menuitem>
    <hr />
    <winui-menuitem :option="check('arrange')">
      Auto arrange icons
    </winui-menuitem>
    <winui-menuitem :option="check('align')" value="true">
      Align icons to grid
    </winui-menuitem>
  </winui-menu>
</template>

<script>
export default {
  data() {
    return {
      check: (id) => ({ as: "checkbox", id: id + "-icons" }),
      radio: (size) => ({
        as: "radio",
        id: "icon-size-" + size,
        name: "icon-size",
        nativeValue: size,
      }),
      radioSelected: "md",
    };
  },
};
</script>

<style lang="stylus" scoped>
.winui-menu {
  width: 200px;
}
</style>