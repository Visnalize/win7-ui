<template>
  <winui-tabs :tabs="tabs" justified>
    <template #tab1>
      <p>Content of the first tab</p>
    </template>
    <template #tab2>
      <p>Content of the second tab</p>
    </template>
    <template #tab3>
      <p>Content of the third tab</p>
    </template>
    <template #tab4>
      <p>Content of the fourth tab</p>
    </template>
  </winui-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: {
        tab1: "First tab",
        tab2: "Second tab",
        tab3: "Third tab",
        tab4: "Fourth tab",
      },
    };
  },
};
</script>
