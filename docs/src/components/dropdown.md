# Dropdown / Select

<Content-Subtitle>Selects an option from a list</Content-Subtitle>

<Misc-Ad />

::: tip Alias: "Select"
`<winui-dropdown>` and `<winui-select>` can be used interchangeably.
:::

## Usage

<Content-Example>

<div><Demo-Dropdown-Basic /></div>

<<< @/src/.vuepress/components/Demo/Dropdown/Basic.vue

</Content-Example>

## Props

### `options` <Badge text="optional" type="tip" />

- Type: `Array<{ label: string, value: any }>`
- Default: `undefined`

The options to display in the dropdown. Each option must have a `label` and `value` property.

### `value` <Badge text="optional" type="tip" />

- Type: `number` | `string`
- Default: `undefined`

The value of the selected option.

### `placeholder` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `undefined`

The placeholder text to be displayed when no option is selected.

## Customization

Use the class name `.winui-dropdown` to override/customize the component's styles.

## Examples

### Using `options` as prop

<Content-Example>

<div><Demo-Dropdown-PropOptions /></div>

<<< @/src/.vuepress/components/Demo/Dropdown/PropOptions.vue

</Content-Example>

### Using slot for `options`

<Content-Example>

<div><Demo-Dropdown-Basic /></div>

<<< @/src/.vuepress/components/Demo/Dropdown/Basic.vue

</Content-Example>

### Handling two-way binding

<Content-Example>

<div><Demo-Dropdown-Binding /></div>

<<< @/src/.vuepress/components/Demo/Dropdown/Binding.vue

</Content-Example>

### Using `placeholder`

<Content-Example>

<div><Demo-Dropdown-Placeholder /></div>

<<< @/src/.vuepress/components/Demo/Dropdown/Placeholder.vue

</Content-Example>

<Misc-Ad />
