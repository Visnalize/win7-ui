<template>
  <select class="winui-dropdown" v-model="computedValue">
    <option v-if="placeholder" :value="undefined" disabled selected>
      {{ placeholder }}
    </option>
    <template v-if="options">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="selected === option.value"
      >
        {{ option.label }}
      </option>
    </template>
    <slot v-else />
  </select>
</template>

<script>
export default {
  name: "WinuiDropdown",
  alias: "WinuiSelect",
  props: {
    value: [Number, String],
    options: Array,
    placeholder: String,
  },
  computed: {
    computedValue: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;
        this.$emit("input", value);
      },
    },
  },
  data() {
    return {
      selected: this.value,
    };
  },
  watch: {
    value(value) {
      this.selected = value;
    },
  },
};
</script>

<style scoped src="7.css/dist/gui/dropdown.css"></style>
