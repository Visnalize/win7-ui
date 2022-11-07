<template>
  <div class="winui-checkbox">
    <input
      v-model="computedValue"
      :id="id"
      :name="name"
      :disabled="disabled"
      type="checkbox"
    />
    <label :for="id"><slot /></label>
  </div>
</template>

<script>
export default {
  name: "WinuiCheckbox",
  props: {
    id: { type: String, required: true },
    name: String,
    value: [Number, String, Boolean],
    disabled: Boolean,
  },
  computed: {
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

<style scoped src="7.css/dist/gui/checkbox.css"></style>
