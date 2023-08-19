# Icon

<Content-Subtitle>Renders a square icon</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<div><Demo-Icon-Basic /></div>

<<< @/src/.vuepress/components/Demo/Icon/Basic.vue

</Content-Example>

## Props

### `src` <Badge text="required" type="error" />

- Type: `string`
- Default: `undefined`

The path or URL to the icon image.

### `alt` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `undefined`

The alt text of the icon (visible when the icon image fails to load).

### `size` <Badge text="optional" type="tip" />

- Type: `number` | `string`
- Default: `undefined`

The size of the icon. A predefined size also helps prevent the [Cumulative Layout Shift](https://web.dev/cls/) issue.

## Customization

Use the class name `.winui-icon` to override/customize the component's styles.

## Examples

### Specifying the icon's `size`

<Content-Example>

<div><Demo-Icon-Size /></div>

<<< @/src/.vuepress/components/Demo/Icon/Size.vue{5}

</Content-Example>

<Misc-Ad />
