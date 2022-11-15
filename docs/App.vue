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
    <winui-checkbox id="check1" name="check" v-model="isChecked">
      I am checked
    </winui-checkbox>
    <winui-checkbox id="check2" name="check">I am free</winui-checkbox>
    <winui-checkbox id="check3" name="check" disabled>
      I am disabled
    </winui-checkbox>
    <winui-balloon> ABC </winui-balloon>
    <winui-dropdown :options="options" v-model="dropdownValue" />
    <winui-treeview class="has-collapse-button">
      <winui-collapse open title="Javascript">
        <ul>
          <li>Avoid at all costs</li>
          <li>
            <winui-collapse>
              <template #title>
                <span class="collapse-title">
                  <img
                    src="https://img.icons8.com/color/18/000000/monitor--v1.png"
                  />
                  Unless
                </span>
              </template>
              <ul>
                <li>Avoid</li>
                <li>
                  <winui-collapse title="At">
                    <ul>
                      <li>Avoid</li>
                      <li>At</li>
                      <li>All</li>
                      <li>Cost</li>
                    </ul>
                  </winui-collapse>
                </li>
                <li>All</li>
                <li>Cost</li>
              </ul>
            </winui-collapse>
          </li>
        </ul>
      </winui-collapse>
    </winui-treeview>
    <winui-listbox
      class="has-hover"
      :items="options"
      v-model="listboxValue"
    ></winui-listbox>
    <winui-slider max="10" min="1" v-model="sliderValue" />
    <winui-menubar class="can-hover">
      <winui-menuitem>
        File
        <winui-menu>
          <winui-menuitem><button>Open</button></winui-menuitem>
          <winui-menuitem><button>Save</button></winui-menuitem>
          <winui-menuitem><button>Exit</button></winui-menuitem>
        </winui-menu>
      </winui-menuitem>
      <winui-menuitem>Edit</winui-menuitem>
      <winui-menuitem>View</winui-menuitem>
      <winui-menuitem>Help</winui-menuitem>
    </winui-menubar>
    <winui-menu class="can-hover" style="width: 300px">
      <winui-menuitem>
        View
        <winui-menu>
          <winui-menuitem :option="menuOption('lg')" v-model="menuOptionValue"
            >Large icons</winui-menuitem
          >
          <winui-menuitem :option="menuOption('md')" v-model="menuOptionValue"
            >Medium icons</winui-menuitem
          >
          <winui-menuitem :option="menuOption('sm')" v-model="menuOptionValue"
            >Small icons</winui-menuitem
          >
          <hr />
          <winui-menuitem :option="{ as: 'checkbox', id: 'arrange-icons' }"
            >Auto arrange icons</winui-menuitem
          >
        </winui-menu>
      </winui-menuitem>
      <hr />
      <winui-menuitem><button>Sort by</button></winui-menuitem>
      <winui-menuitem><button>Refresh</button></winui-menuitem>
      <winui-menuitem><button>Display</button></winui-menuitem>
    </winui-menu>
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
        { label: "5 - Incredible!", value: "incredible" },
        { label: "4 - Great!", value: "great" },
        { label: "3 - Pretty good!", value: "good" },
        { label: "2 - Not so great!", value: "not so" },
        { label: "1 - Unfortunate!", value: "ew" },
      ],
      listboxValue: "good",
      dropdownValue: "great",
      sliderValue: 4,
      isChecked: true,
      menuOption: (size) => ({
        as: "radio",
        id: "icon-size-" + size,
        name: "icon-size",
        nativeValue: size,
      }),
      menuOptionValue: "md",
    };
  },
  watch: {
    menuOptionValue(value) {
      console.log(value);
    },
    sliderValue(value) {
      console.log(value);
    },
  },
  methods: {},
};
</script>

<style>
.collapse-title img {
  display: inline-block;
  vertical-align: bottom;
}
</style>
