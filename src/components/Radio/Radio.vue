<template>
  <div class="winui-radio">
    <input
      :id="id"
      :value="value"
      :name="name"
      :checked="checked"
      :disabled="disabled"
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
    value: String,
    checked: Boolean,
    disabled: Boolean,
  },
};
</script>

<style scoped src="7.css/dist/gui/radiobutton.css"></style>

<style lang="scss" scoped></style>
