const { description } = require("../../package");

/** @type {import("vuepress/config").Config} */
module.exports = {
  title: "Win7 UI",
  description,
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "script",
      {
        async: true,
        "data-ad-client": "ca-pub-5904323684803247",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-TRC2SF4L67",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TRC2SF4L67');`,
    ],
  ],

  themeConfig: {
    repo: "visnalize/win7-ui",
    docsDir: "docs/src",
    docsBranch: "main",
    editLinks: true,
    lastUpdated: true,
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
        title: "🚀 Guide",
        collapsable: false,
        children: ["/guide/"],
      },
      {
        title: "📚 Components",
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
          "/components/menuitem",
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

  plugins: [
    [
      "autometa",
      {
        canonical_base: "https://win7ui.visnalize.com",
        author: { name: "Visnalize" },
      },
    ],
  ],
};
