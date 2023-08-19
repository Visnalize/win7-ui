<template>
  <div>
    <winui-dropdown v-model="value">
      <option value="Dog">🐶 Dog</option>
      <option value="Cat">🐱 Cat</option>
      <option value="Mouse">🐭 Mouse</option>
    </winui-dropdown>
    <span>{{ value }} is my best friend!</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "Dog",
    };
  },
};
</script>
