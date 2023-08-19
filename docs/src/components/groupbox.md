# Groupbox / Fieldset

<Content-Subtitle>Displays controls in a group with a label</Content-Subtitle>

<Misc-Ad />

::: tip Alias: "Fieldset"
`<winui-groupbox>` and `<winui-fieldset>` can be used interchangeably.
:::

## Usage

<Content-Example>

<div><Demo-Groupbox-Basic /></div>

<<< @/src/.vuepress/components/Demo/Groupbox/Basic.vue

</Content-Example>

## Props

### `label` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `undefined`

The label to be displayed for the groupbox.

## Customization

Use the class name `.winui-groupbox` to override/customize the component's styles.

## Examples

### Using `label`

<Content-Example>

<div><Demo-Groupbox-Label /></div>

<<< @/src/.vuepress/components/Demo/Groupbox/Label.vue{2}

</Content-Example>

<Misc-Ad />
