# Link

<Content-Subtitle>Navigates to a URL when clicked</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<div><Demo-Link-Basic /></div>

<<< @/src/.vuepress/components/Demo/Link/Basic.vue

</Content-Example>

## Props

::: tip Tip
The __Link__ component inherits all attributes and events from [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), or if `href` is missing, inherits from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
:::

### `href` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `undefined`

The URL to navigate to when the link is clicked. If `href` is missing, the component will render as a button.

### `text` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `undefined`

The text to display in the link.

### `icon` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `undefined`

The icon image to display with the link. Use the [Icon](./icon.md) component to render.

## Customization

Use the class name `.winui-link` to override/customize the component's styles.

## Examples

### Rendering as a button with `icon`

<Content-Example>

<div><Demo-Link-Icon /></div>

<<< @/src/.vuepress/components/Demo/Link/Icon.vue

</Content-Example>

### Using slot for `text`

<Content-Example>

<div><Demo-Link-SlotText /></div>

<<< @/src/.vuepress/components/Demo/Link/SlotText.vue

</Content-Example>

<Misc-Ad />
