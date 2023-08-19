<template>
  <winui-checkbox id="check_binding" v-model="isChecked">
    This check box is {{ isChecked ? "checked" : "unchecked" }}
  </winui-checkbox>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>
