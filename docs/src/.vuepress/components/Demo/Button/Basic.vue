<template>
  <winui-button @click="handleClick">Click me!</winui-button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert("Hello, world!");
    },
  },
};
</script>
