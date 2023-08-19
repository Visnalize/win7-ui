<template>
  <div>
    <winui-searchbox instant @search="handleSearch" />
    <div>Search value: {{ searchValue }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      timeout: null,
    };
  },
  methods: {
    handleSearch(value) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.searchValue = value;
      }, 500);
    },
  },
};
</script>
