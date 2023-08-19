<template>
  <div>
    <winui-progress :progress="progress" :transition="transition" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      transition: 100,
    };
  },
  mounted() {
    setInterval(() => {
      this.progress += 1;
      if (this.progress > 100) {
        this.progress = 0;
      }
    }, this.transition);
  },
};
</script>
