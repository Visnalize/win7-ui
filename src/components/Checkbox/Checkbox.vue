<template>
  <div class="winui-checkbox">
    <input
      :id="id"
      :value="value"
      :name="name"
      :checked="checked"
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
    value: String,
    checked: Boolean,
    disabled: Boolean,
  },
};
</script>

<style scoped src="7.css/dist/gui/checkbox.css"></style>
