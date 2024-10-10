<template>
  <div>
    <div style="margin-bottom: 12px">
      Active tab: <code>{{ activeTab }}</code>
    </div>
    <winui-tabs :tabs="tabs" @change="handleChange">
      <template #tab1>
        <p>Content of the first tab</p>
      </template>
      <template #tab2>
        <p>Content of the second tab</p>
      </template>
      <template #tab3>
        <p>Content of the third tab</p>
      </template>
      <template #tab4>
        <p>Content of the fourth tab</p>
      </template>
    </winui-tabs>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      activeTab: "tab1",
      tabs: {
        tab1: "First tab",
        tab2: "Second tab",
        tab3: "Third tab",
        tab4: "Fourth tab",
      },
    };
  },
  methods: {
    handleChange(tabId) {
      this.activeTab = tabId;
    },
  },
};
</script>
