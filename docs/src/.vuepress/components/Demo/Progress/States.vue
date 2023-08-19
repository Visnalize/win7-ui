<template>
  <div>
    <!-- #region snippet -->
    <winui-progress progress="70" />
    <winui-progress progress="50" class="paused" />
    <winui-progress progress="30" class="error" />
    <winui-progress progress="indeterminate" />
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="stylus" scoped>
.winui-progress {
  margin-bottom: 12px;
}
</style>