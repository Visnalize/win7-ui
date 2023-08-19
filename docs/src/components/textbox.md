# Textbox

<Content-Subtitle>Allows entering text</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<div><Demo-Textbox-Basic /></div>

<<< @/src/.vuepress/components/Demo/Textbox/Basic.vue

</Content-Example>

## Props

::: tip Tip
The __Textbox__ component inherits all attributes and events from [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), or if `type` is `textarea`, inherits from [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
:::

### `type` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `text`

The type of the textbox.

### `value` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `undefined`

The initial value of the textbox.

## Customization

Use the class name `.winui-textbox` to override/customize the component's styles.

## Examples

### Different types

<Content-Example>

<div><Demo-Textbox-Types /></div>

<<< @/src/.vuepress/components/Demo/Textbox/Types.vue

</Content-Example>

### Handling two-way binding

<Content-Example>

<div><Demo-Textbox-Binding /></div>

<<< @/src/.vuepress/components/Demo/Textbox/Binding.vue

</Content-Example>

<Misc-Ad />
