import { Plugin } from "@/utils/component";
import _Menu from "./Menu.vue";
import _MenuBar from "./MenuBar.vue";
import _MenuItem from "./MenuItem.vue";

export const Menu = Plugin(_Menu);
export const MenuBar = Plugin(_MenuBar);
export const MenuItem = Plugin(_MenuItem);
