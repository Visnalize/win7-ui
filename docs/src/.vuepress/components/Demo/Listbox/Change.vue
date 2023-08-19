<template>
  <div>
    <winui-listbox :items="items" @change="handleChange" />
    <div>My spirit animal is: {{ animal }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animal: "_____",
      items: [
        { label: "🐭 Mouse", value: "mouse" },
        { label: "🐨 Koala", value: "koala" },
        { label: "🐯 Tiger", value: "tiger" },
        { label: "🐰 Rabbit", value: "rabbit" },
        { label: "🐵 Monkey", value: "monkey" },
      ],
    };
  },
  methods: {
    handleChange(value) {
      this.animal = this.items.find((item) => item.value === value).label;
    },
  },
};
</script>