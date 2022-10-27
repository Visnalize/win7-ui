<template>
  <textarea v-if="area"></textarea>
  <input v-else type="text" class="winui-textbox" />
</template>

<script>
export default {
  name: "WinuiTextbox",
  props: {
    area: Boolean,
  },
};
</script>

<style scoped src="7.css/dist/gui/textbox.css"></style>
