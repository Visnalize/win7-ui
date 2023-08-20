<template>
  <winui-button @click="click">
    <slot />
  </winui-button>
</template>

<script>
export default {
  props: {
    href: String,
  },
  methods: {
    click() {
      this.$router.push(this.href);
    },
  },
};
</script>

<style lang="stylus" scoped>
.winui-button {
  padding: 0.5rem 1rem;
  font-size: 1.1rem;

  &:not(:last-child) {
    margin: 0 0 0.5rem 0;
  }
}

@media (min-width: 719px) {
  .winui-button {
    padding: 1rem 2rem;
    font-size: 1.5rem;

    &:not(:last-child) {
      margin: 0 0.5rem 0 0;
    }
  }
}
</style>
