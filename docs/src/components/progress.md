# Progress

<Content-Subtitle>Indicates the progress of an operation</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<div><Demo-Progress-Basic /></div>

<<< @/src/.vuepress/components/Demo/Progress/Basic.vue

</Content-Example>

## Props

### `progress` <Badge text="optional" type="tip" />

- Type: `number` | `string` | `'indeterminate'`
- Default: `0`

The percentage value of the progress. If the value is `'indeterminate'`, the progress bar will animate.

### `transition` <Badge text="optional" type="tip" />

- Type: `number` | `string`
- Default: `0`

The transition duration of the progress bar in milliseconds. This makes the progress bar animate smoothly.

## Customization

Use the class name `.winui-progress` to override/customize the component's styles.

The component also supports the following classes:

- `.paused` - indicates that the progress is paused
- `.error` - indicates that the progress has encountered an error
- `.animate` - animates the progress bar

## Examples

### Different progress states

<Content-Example>

<div><Demo-Progress-States /></div>

<<< @/src/.vuepress/components/Demo/Progress/States.vue#snippet

</Content-Example>

### Animating the progress bar

<Content-Example>

<div><Demo-Progress-Animated /></div>

<<< @/src/.vuepress/components/Demo/Progress/Animated.vue#snippet

</Content-Example>

### Binding the progress values

<Content-Example>

<div><Demo-Progress-Binding /></div>

<<< @/src/.vuepress/components/Demo/Progress/Binding.vue

</Content-Example>

<Misc-Ad />
