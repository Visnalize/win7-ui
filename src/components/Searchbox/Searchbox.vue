<template>
  <input
    v-if="instant"
    type="search"
    class="winui-searchbox"
    :placeholder="placeholder"
    @input="search"
    v-model="searchValue"
    v-on="$listeners"
  />
  <div v-else class="searchbox winui-searchbox">
    <input
      type="search"
      v-model="searchValue"
      :placeholder="placeholder"
      @keyup.enter="search"
    />
    <button aria-label="search" @click="search" />
  </div>
</template>

<script>
export default {
  name: "WinuiSearchbox",
  props: {
    instant: Boolean,
    placeholder: { type: String, default: "Search" },
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchValue);
    },
  },
};
</script>

<style lang="scss" scoped>
[type="search"] {
  min-width: auto;
}

[aria-label="search"] {
  border: 1px solid #8e8f8f;
}
</style>
