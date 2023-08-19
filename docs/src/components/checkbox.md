# Checkbox

<Content-Subtitle>Represents an independent or non-exclusive choice</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<Demo-Checkbox-Basic />

<<< @/src/.vuepress/components/Demo/Checkbox/Basic.vue

</Content-Example>

## Props

### `id` <Badge text="required" type="error" />

- Type: `string`
- Default: `undefined`

The id of the checkbox. Required to bind the label to the input, must be unique in the whole page.

### `name` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `undefined`

The name of the checkbox. Only needed to bind the checkbox to a form.

### `value` <Badge text="optional" type="tip" />

- Type: `number` | `string` | `boolean`
- Default: `undefined`

The value of the checkbox. This is the value that will be returned when the checkbox is checked.

### `disabled` <Badge text="optional" type="tip" />

- Type: `boolean`
- Default: `undefined`

The checkbox state. If `true`, the checkbox will be disabled.

## Customization

Use the class name `.winui-checkbox` to override/customize the component's styles.

## Examples

### Disabled state

<Content-Example>

<Demo-Checkbox-Disabled />

<<< @/src/.vuepress/components/Demo/Checkbox/Disabled.vue

</Content-Example>

### Handling two-way binding

<Content-Example>

<Demo-Checkbox-Binding />

<<< @/src/.vuepress/components/Demo/Checkbox/Binding.vue

</Content-Example>

<Misc-Ad />
