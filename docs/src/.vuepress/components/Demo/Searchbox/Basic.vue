<template>
  <div>
    <winui-searchbox placeholder="Instant" @search="handleSearch" instant />
    <winui-searchbox placeholder="Regular" @search="handleSearch" />
    <div>
      Showing search results for: <strong>{{ searchValue }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    handleSearch(value) {
      this.searchValue = value;
    },
  },
};
</script>