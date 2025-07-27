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
    defaultTab: { type: Number, default: 0 },
    justified: Boolean,
  },
  data() {
    const tabsLength = Object.keys(this.tabs).length;
    return {
      activeTab: Object.keys(this.tabs)[
        Math.max(Math.min(this.defaultTab, tabsLength - 1), 0)
      ],
    };
  },
  methods: {
    change(tab) {
      this.activeTab = tab;
      this.$emit("change", this.activeTab);
    },
  },
};
</script>

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
