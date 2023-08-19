<template>
  <div>
    <winui-radio
      id="radio_light"
      name="radio_mode"
      nativeValue="light"
      v-model="mode"
    >
      Light
    </winui-radio>
    <winui-radio
      id="radio_dark"
      name="radio_mode"
      nativeValue="dark"
      v-model="mode"
    >
      Dark
    </winui-radio>
    <winui-radio
      id="radio_auto"
      name="radio_mode"
      nativeValue="auto"
      v-model="mode"
    >
      Auto
    </winui-radio>
    <div>Your preferred mode: {{ mode }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "auto",
    };
  },
};
</script>
