<template>
  <div
    role="progressbar"
    :class="['winui-progress', { marquee: indeterminate }]"
    v-bind="ariaValues"
  >
    <div v-if="!indeterminate" :style="progressStyle" />
  </div>
</template>

<script>
export default {
  name: "WinuiProgress",
  props: {
    transition: [Number, String],
    progress: {
      type: [Number, String],
      default: 0,
      validator: (value) =>
        value === "indeterminate" || (value >= 0 && value <= 100),
    },
  },
  computed: {
    ariaValues() {
      if (this.indeterminate) return {};

      return {
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow":
          typeof this.progress === "string"
            ? Number(this.progress.slice(0, -1))
            : this.progress,
      };
    },
    indeterminate() {
      return this.progress === "indeterminate";
    },
    progressStyle() {
      return {
        "--progress": this.progress + "%",
        "--transition": this.transition / 1000 + "s",
      };
    },
  },
};
</script>

<style scoped src="7.css/dist/gui/progressbar.css"></style>

<style lang="scss" scoped>
.winui-progress > div {
  width: var(--progress);
  transition: width var(--transition) linear;
}

.classic {
  background: #7c94ae;
  border-color: #7c94ae;
  border-radius: 0;
  height: 10px;

  > div {
    background: #9acb37;
  }
}
</style>
