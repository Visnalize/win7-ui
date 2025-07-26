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
  alias: "WinuiRange",
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
