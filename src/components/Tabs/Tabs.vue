<template>
  <div class="winui-tabs">
    <menu role="tablist" :class="{ justified }">
      <winui-button
        v-for="(name, tab) in tabs"
        :key="tab"
        :aria-selected="activeTab === tab"
        role="tab"
        @click="change(tab)"
      >
        {{ name }}
      </winui-button>
    </menu>
    <article
      v-for="(_, tab) in tabs"
      :key="tab"
      :hidden="activeTab !== tab"
      role="tabpanel"
    >
      <slot :name="tab" :hidden="activeTab !== tab" />
    </article>
  </div>
</template>

<script>
export default {
  name: "WinuiTabs",
  props: {
    tabs: { type: Object, required: true },
    justified: Boolean,
  },
  data() {
    return { activeTab: Object.keys(this.tabs)[0] };
  },
  methods: {
    change(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped src="7.css/dist/gui/tabs.css"></style>

<style lang="scss" scoped>
[role="tabpanel"] {
  height: 100%;
  font-size: 85%;
  margin-bottom: 0;
  box-sizing: border-box;
  overflow: hidden;

  &:not([hidden]) {
    display: flex;
    flex-direction: column;
  }
}
</style>
