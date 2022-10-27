<template>
  <select class="winui-dropdown" @change="handleChange">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :selected="selected === option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "WinuiDropdown",
  props: {
    options: Array,
    selected: Number,
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<style scoped src="7.css/dist/gui/select.css"></style>
