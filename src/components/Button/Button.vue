<template>
  <button class="winui-button" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "WinuiButton",
};
</script>

<style scoped src="7.css/dist/gui/button.css"></style>

<style lang="scss" scoped>
.winui-button {
  color: #222;

  &:disabled {
    background: #f4f4f4;
    border-color: #aeb2b5;
    box-shadow: none;
  }

  &.round {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    min-width: unset;
    padding: 0;
  }
}
</style>
