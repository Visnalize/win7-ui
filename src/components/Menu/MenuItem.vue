<template>
  <li role="menuitem" :aria-haspopup="hasSubMenu">
    <template v-if="option">
      <input
        v-model="computedValue"
        :type="option.as"
        :name="option.name"
        :id="option.id"
        :value="option.nativeValue"
      />
      <label :for="option.id"><slot /></label>
    </template>
    <slot v-else />
  </li>
</template>

<script>
export default {
  name: "WinuiMenuitem",
  props: {
    option: Object,
    value: [Number, String, Boolean],
  },
  computed: {
    hasSubMenu() {
      return this.$slots.default.some((slot) =>
        slot.tag?.includes("WinuiMenu")
      );
    },
    computedValue: {
      get() {
        return this.input;
      },
      set(value) {
        this.input = value;
        this.$emit("input", value);
      },
    },
  },
  data() {
    return {
      input: this.value,
    };
  },
  watch: {
    value(value) {
      this.input = value;
    },
  },
};
</script>

<style lang="scss" scoped>
[role="menuitem"] {
  ul[role="menu"] > &,
  ul[role="menubar"] > & {
    font: 9pt Segoe UI, sans-serif;
  }

  input[type] + label:hover::before {
    box-shadow: 0 0 0 1px #b3d3f9;
  }
}
</style>
