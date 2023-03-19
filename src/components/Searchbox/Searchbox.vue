<template>
  <input
    v-if="instant"
    type="search"
    class="winui-searchbox"
    :placeholder="placeholder"
  />
  <div v-else class="searchbox winui-searchbox">
    <input type="search" :placeholder="placeholder" />
    <button aria-label="search" />
  </div>
</template>

<script>
export default {
  name: "WinuiSearchbox",
  props: {
    instant: Boolean,
    placeholder: String,
  },
};
</script>

<style scoped src="7.css/dist/gui/searchbox.css"></style>

<style lang="scss" scoped>
[aria-label="search"] {
  border: 1px solid #8e8f8f;
}
</style>
