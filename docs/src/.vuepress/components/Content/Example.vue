<template>
  <div class="example">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.example {
  background: #eee;
  margin: 2rem 0;

  > *:not(:last-child) {
    padding: 2rem 2rem 1rem 2rem;
  }
}
</style>