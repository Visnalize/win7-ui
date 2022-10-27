<template>
  <img v-if="src" :src="src" :alt="alt" :width="size" />
</template>

<script>
export default {
  name: "WinuiIcon",
  props: {
    src: String,
    alt: String,
    size: Number,
  },
};
</script>
