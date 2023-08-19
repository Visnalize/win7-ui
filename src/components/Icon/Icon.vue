<template>
  <span :style="wrapperStyle" class="winui-icon">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </span>
</template>

<script>
export default {
  name: "WinuiIcon",
  props: {
    src: { type: String, required: true },
    alt: String,
    size: [String, Number],
  },
  computed: {
    wrapperStyle() {
      if (!this.size) return undefined;
      const hasUnit = /^\d+[a-zA-Z]+$/.test(this.size);
      return { "--size": hasUnit ? this.size : `${this.size}px` };
    },
  },
};
</script>

<style lang="scss" scoped>
.winui-icon {
  display: inline-block;
  width: var(--size);
  height: var(--size);

  img {
    display: block;
  }
}
</style>
