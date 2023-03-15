<template>
  <img :src="src" :alt="alt" :width="size" />
</template>

<script>
export default {
  name: "WinuiIcon",
  props: {
    src: String,
    alt: String,
    size: [String, Number],
  },
};
</script>
