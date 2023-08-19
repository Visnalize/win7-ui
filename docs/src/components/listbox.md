# Listbox

<Content-Subtitle>Selects an item from a visible list</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<div><Demo-Listbox-Basic /></div>

<<< @/src/.vuepress/components/Demo/Listbox/Basic.vue

</Content-Example>

## Props

### `items` <Badge text="required" type="error" />

- Type: `Array<{ label: string, value: any }>`
- Default: `undefined`

The list of items to display in the listbox. Each item must have a `label` and `value` property.

### `value` <Badge text="optional" type="tip" />

- Type: `number` | `string`
- Default: `undefined`

The value of the selected item.

### `@change` <Badge text="optional" type="tip" />

- Type: `(value: number | string) => void`
- Default: `undefined`

The function to call when the selected item changes. The function will be called with the newly selected value as an argument.

## Customization

Use the class name `.winui-listbox` to override/customize the component's styles.

## Examples

### Using the `@change` event

<Content-Example>

<div><Demo-Listbox-Change /></div>

<<< @/src/.vuepress/components/Demo/Listbox/Change.vue

</Content-Example>

### Handling two-way binding

<Content-Example>

<div><Demo-Listbox-Binding /></div>

<<< @/src/.vuepress/components/Demo/Listbox/Binding.vue

</Content-Example>

<Misc-Ad />
