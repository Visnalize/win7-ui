<template>
  <textarea
    v-if="type === 'textarea'"
    v-on="listeners"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="winui-textbox"
  />
  <input
    v-else
    v-on="listeners"
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="winui-textbox"
  />
</template>

<script>
export default {
  name: "WinuiTextbox",
  props: {
    type: { type: String, default: "text" },
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
