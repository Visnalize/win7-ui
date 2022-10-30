<template>
  <details class="winui-collapse">
    <summary>
      <template v-if="title">{{ title }}</template>
      <slot v-else name="title" />
    </summary>
    <slot />
  </details>
</template>

<script>
export default {
  name: "WinuiCollapse",
  props: {
    title: String,
  },
};
</script>

<style scoped src="7.css/dist/gui/collapse.css"></style>
