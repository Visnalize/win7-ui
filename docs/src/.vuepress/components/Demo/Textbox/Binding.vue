<template>
  <div>
    <winui-textbox
      type="email"
      placeholder="Enter email address"
      v-model="email"
    />
    <div>Your email address: {{ email }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>
