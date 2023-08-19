# Radio

<Content-Subtitle>Represents a single choice from a set of mutually exclusive choices</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<div><Demo-Radio-Basic /></div>

<<< @/src/.vuepress/components/Demo/Radio/Basic.vue

</Content-Example>

## Props

### `id` <Badge text="required" type="error" />

- Type: `string`
- Default: `undefined`

The id of the radio. Required to bind the label to the input, must be unique in the whole page.

### `name` <Badge text="required" type="error" />

- Type: `string`
- Default: `undefined`

The name of the radio. Required to bind the radio to a group of radios.

### `nativeValue` <Badge text="optional" type="tip" />

- Type: `number` | `string` | `boolean`
- Default: `undefined`

The value of the radio, used to match against the `value` prop.

### `value` <Badge text="optional" type="tip" />

- Type: `number` | `string` | `boolean`
- Default: `undefined`

The value that determines whether the radio is checked.

### `disabled` <Badge text="optional" type="tip" />

- Type: `boolean`
- Default: `undefined`

The radio state. If `true`, the radio will be disabled.

## Customization

Use the class name `.winui-radio` to override/customize the component's styles.

## Examples

### Disabled state

<Content-Example>

<div><Demo-Radio-Disabled /></div>

<<< @/src/.vuepress/components/Demo/Radio/Disabled.vue

</Content-Example>

### Handling two-way binding

<Content-Example>

<div><Demo-Radio-Binding /></div>

<<< @/src/.vuepress/components/Demo/Radio/Binding.vue

</Content-Example>

<Misc-Ad />
