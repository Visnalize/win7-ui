<template>
  <details class="winui-collapse">
    <summary>
      <slot v-if="$slots.title" name="title" />
      <template v-else>{{ titleState }}</template>
    </summary>
    <slot />
  </details>
</template>

<script>
export default {
  name: "WinuiCollapse",
  props: {
    title: { type: String },
  },
  data() {
    return {
      titleState: this.title || this.getDefaultTitle(),
    };
  },
  watch: {
    title(newTitle) {
      this.titleState = newTitle;
    },
  },
  mounted() {
    this.$el.addEventListener("toggle", this.handleToggle);
  },
  beforeDestroy() {
    this.$el.removeEventListener("toggle", this.handleToggle);
  },
  methods: {
    handleToggle() {
      this.$emit("toggle", this.$el.open);
      if (!this.title) {
        this.titleState = this.getDefaultTitle();
      }
    },
    getDefaultTitle() {
      return this.$el?.open ? "Hide" : "Show";
    },
  },
};
</script>
