<template>
  <fieldset class="winui-groupbox">
    <legend v-if="label">{{ label }}</legend>
    <slot />
  </fieldset>
</template>

<script>
export default {
  name: "WinuiGroupbox",
  alias: "WinuiFieldset",
  props: {
    label: String,
  },
};
</script>
