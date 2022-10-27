<template>
  <div>
    <winui-button class="default">default button</winui-button>
    <winui-button>Click me</winui-button>
    <winui-link text="link" icon="https://abs.twimg.com/favicons/twitter.ico" />
    <winui-tabs :tabs="tabs">
      <template #apps> apps </template>
      <template #games> games </template>
      <template #softs> softs </template>
    </winui-tabs>
    <winui-progress progress="50%" class="error" />
    <winui-groupbox label="Radio buttons">
      <winui-radio id="theme-light" value="light" name="theme" checked>
        Light
      </winui-radio>
      <winui-radio id="theme-dark" value="dark" name="theme">Dark</winui-radio>
      <winui-radio id="theme-auto" value="auto" name="theme" disabled>
        Auto
      </winui-radio>
    </winui-groupbox>
    <winui-checkbox id="check1" value="1" name="check" checked>
      I am checked
    </winui-checkbox>
    <winui-checkbox id="check2" value="2" name="check">
      I am free
    </winui-checkbox>
    <winui-checkbox id="check3" value="3" name="check" disabled>
      I am disabled
    </winui-checkbox>
    <winui-balloon> ABC </winui-balloon>
    <winui-dropdown
      :options="options"
      :selected="2"
      @change="onDropdownChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: {
        apps: "Apps",
        games: "Games",
        softs: "Software",
      },
      options: [
        { label: "5 - Incredible!", value: 0 },
        { label: "4 - Great!", value: 1 },
        { label: "3 - Pretty good!", value: 2 },
        { label: "2 - Not so great!", value: 3 },
        { label: "1 - Unfortunate!", value: 4 },
      ],
    };
  },
  methods: {
    onDropdownChange(value) {
      console.log(value);
    },
  },
};
</script>

<style></style>
