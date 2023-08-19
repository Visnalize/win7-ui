<template>
  <winui-dropdown value="milk" :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: "🥛 Milk", value: "milk" },
        { label: "🍷 Wine", value: "wine" },
        { label: "🧃 Juice", value: "juice" },
      ],
    };
  },
};
</script>
