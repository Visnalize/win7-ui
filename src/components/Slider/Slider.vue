<template>
  <input
    type="range"
    class="winui-slider"
    :value="value"
    @input="$emit('input', $event.target.value)"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: "WinuiSlider",
  props: {
    value: [String, Number],
  },
  computed: {
    listeners() {
      // excluding the `input` listener for v-model
      const listeners = this.$listeners;
      delete listeners.input;
      return listeners;
    },
  },
};
</script>

<style scoped src="7.css/dist/gui/slider.css"></style>
