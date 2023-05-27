const { description } = require("../../package");

module.exports = {
  title: "Win7 UI",
  description,
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    repo: "https://github.com/Visnalize/win7-ui",
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Components",
        link: "/components/",
      },
    ],
    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        children: ["/guide/"],
      },
      {
        title: "Components",
        collapsable: false,
        path: "/components/",
        children: [
          "/components/balloon",
          "/components/button",
          "/components/checkbox",
          "/components/collapse",
          "/components/dropdown",
          "/components/groupbox",
          "/components/icon",
          "/components/link",
          "/components/listbox",
          "/components/menu",
          "/components/progress",
          "/components/radio",
          "/components/searchbox",
          "/components/slider",
          "/components/tabs",
          "/components/textbox",
          "/components/treeview",
        ],
      },
    ],
  },
};
