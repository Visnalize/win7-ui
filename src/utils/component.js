export function Plugin(component) {
  return {
    install(Vue) {
      Vue.component(component.name, component);
      if (component.alias) {
        Vue.component(component.alias, component);
      }
    },
  };
}
