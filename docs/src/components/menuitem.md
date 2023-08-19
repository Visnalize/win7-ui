# Menu Item

<Content-Subtitle>Displays an option in a menu</Content-Subtitle>

<Misc-Ad />

## Usage

The __Menuitem__ component is intended to be used as a child of the [__Menu__](./menu.md) component. It does nothing on its own.

_Refer to the [__Menu__](./menu.md) component for usage examples._

## Props

### `option` <Badge text="optional" type="tip" />

- Type: `{ as: 'checkbox' | 'radio', id: string, name: string, nativeValue: any }`
- Default: `undefined`

The option to render the menu item as, e.g. `checkbox`, `radio`.

## Customization

_Refer to the [__Menu__](./menu.md) component for customization instructions._

## Examples

_Refer to the [__Menu__](./menu.md) component for more examples._

### Attaching shortcut mnemonics, icons to menu items

<Content-Example>

<div><Demo-Menuitem-Decoration /></div>

<<< @/src/.vuepress/components/Demo/Menuitem/Decoration.vue

</Content-Example>

### Using `option`

<Content-Example>

<div><Demo-Menuitem-Option /></div>

<<< @/src/.vuepress/components/Demo/Menuitem/Option.vue

</Content-Example>

<Misc-Ad />
