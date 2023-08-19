<template>
  <winui-collapse @toggle="handleToggle" :title="open ? 'Conceal' : 'Reveal a truth'">
    <div>"Parasyte: The Maxim" is the best anime ever!</div>
  </winui-collapse>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleToggle(isOpen) {
      this.open = isOpen;
    },
  },
};
</script>