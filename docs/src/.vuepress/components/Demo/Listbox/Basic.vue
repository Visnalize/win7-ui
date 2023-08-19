<template>
  <winui-listbox :items="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Item 1", value: 1 },
        { label: "Item 2", value: 2 },
        { label: "Item 3", value: 3 },
        { label: "Item 4", value: 4 },
        { label: "Item 5", value: 5 },
      ],
    };
  },
};
</script>