import * as components from "./components";

const Winui = {
  install(Vue) {
    for (let componentName in components) {
      Vue.use(components[componentName]);
    }
  },
};

export default Winui;
