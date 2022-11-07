<template>
  <div class="winui-radio">
    <input
      v-model="computedValue"
      :id="id"
      :name="name"
      :disabled="disabled"
      :value="nativeValue"
      type="radio"
    />
    <label :for="id"><slot /></label>
  </div>
</template>

<script>
export default {
  name: "WinuiRadio",
  props: {
    id: { type: String, required: true },
    name: String,
    value: [Number, String, Boolean],
    nativeValue: [Number, String, Boolean],
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

<style scoped src="7.css/dist/gui/radiobutton.css"></style>
