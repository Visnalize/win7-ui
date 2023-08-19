<template>
  <div>
    <!-- #region snippet -->
    <winui-progress progress="30" class="animate" />
    <winui-progress progress="50" class="animate paused" />
    <winui-progress progress="70" class="animate error" />
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="stylus" scoped>
.winui-progress {
  margin-bottom: 12px;
}
</style>