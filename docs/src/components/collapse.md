# Collapse

<Content-Subtitle>Shows or hides additional information</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<Demo-Collapse-Basic />

<<< @/src/.vuepress/components/Demo/Collapse/Basic.vue

</Content-Example>

## Props

### `title` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `"Show" | "Hide"` (depending on the collapse state)

The title of the collapse.

### `open` <Badge text="optional" type="tip" />

- Type: `boolean`
- Default: `false`

The initial collapse state. If `true`, the collapse will be open.

### `@toggle` <Badge text="optional" type="tip" />

- Type: `(open: boolean) => void`
- Default: `undefined`

The handler function that will be called when the collapse is toggled. The function will be called with the new collapse state as an argument.

## Customization

Use the class name `.winui-collapse` to override/customize the component's styles.

## Examples

### Using `title` as prop

<Content-Example>

<Demo-Collapse-PropTitle />

<<< @/src/.vuepress/components/Demo/Collapse/PropTitle.vue{2}

</Content-Example>

### Using `title` as slot

<Content-Example>

<Demo-Collapse-SlotTitle />

<<< @/src/.vuepress/components/Demo/Collapse/SlotTitle.vue{3-5}

</Content-Example>

### Opened by default

<Content-Example>

<Demo-Collapse-Opened />

<<< @/src/.vuepress/components/Demo/Collapse/Opened.vue{2}

</Content-Example>

### Using the `@toggle` event

<Content-Example>

<Demo-Collapse-Toggle />

<<< @/src/.vuepress/components/Demo/Collapse/Toggle.vue

</Content-Example>

<Misc-Ad />
