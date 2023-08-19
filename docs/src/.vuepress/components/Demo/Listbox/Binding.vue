<template>
  <div>
    <winui-listbox :items="items" v-model="animal" />
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
};
</script>