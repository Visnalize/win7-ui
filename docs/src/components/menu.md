# Menu

<Content-Subtitle>Displays options in a hierarchical list</Content-Subtitle>

<Misc-Ad />

## Usage

The __Menu__ component comes in two variants: __Menu__ and __MenuBar__. Both are basically just wrappers that use the children [__Menuitem__](./menuitem.md) components to render the items.

### Menu

<Content-Example>

<div><Demo-Menu-Basic /></div>

<<< @/src/.vuepress/components/Demo/Menu/Basic.vue

</Content-Example>

### MenuBar

<Content-Example>

<div><Demo-Menu-Bar /></div>

<<< @/src/.vuepress/components/Demo/Menu/Bar.vue

</Content-Example>

## Props

_Not available._

## Customization

- Use the class name `.winui-menu` to override/customize the __Menu__ component's styles.
- Use the class name `.winui-menubar` to override/customize the __Menubar__ component's styles.

By default, the nesting menus are only shown when the associated option is focused/clicked. To trigger it on hover, add the `can-hover` class to the root `<winui-menu>`/`<winui-menubar>` element.

## Examples

_Refer to the [__Menuitem__](./menuitem.md) component for more examples._

### Nesting menus

<Content-Example>

<div><Demo-Menu-Nesting /></div>

<<< @/src/.vuepress/components/Demo/Menu/Nesting.vue{7,12,20,23,29,33}

</Content-Example>

<Misc-Ad />
