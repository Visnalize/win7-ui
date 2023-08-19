<template>
  <div>
    <winui-slider class="has-box-indicator" min="1" max="30" v-model="age" />
    <div>
      Your age: {{ age }}. You are
      <strong>{{ age > 17 ? "allowed" : "not allowed" }}</strong>
      to drink alcohol.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 18,
    };
  },
};
</script>
