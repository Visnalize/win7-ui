<template>
  <div role="progressbar" class="winui-progress">
    <div :style="{ width: progress }" />
  </div>
</template>

<script>
export default {
  name: "WinuiProgress",
  props: {
    progress: String,
    classic: Boolean,
  },
};
</script>

<style scoped src="7.css/dist/gui/progressbar.css"></style>

<style lang="scss" scoped>
.classic {
  background: #7c94ae;
  border-color: #7c94ae;
  border-radius: 0;
  height: 10px;

  > div {
    background: #9acb37;
    transition: width 1s linear;
  }
}
</style>
