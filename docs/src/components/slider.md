# Slider / Range

<Content-Subtitle>Selects a value from a range</Content-Subtitle>

<Misc-Ad />

::: tip Alias: "Range"
`<winui-slider>` and `<winui-range>` can be used interchangeably.
:::

## Usage

<Content-Example>

<div><Demo-Slider-Basic /></div>

<<< @/src/.vuepress/components/Demo/Slider/Basic.vue

</Content-Example>

## Props

::: tip Tip
The __Slider__ component inherits all attributes and events from [`<input type="range">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
:::

## Customization

Use the class name `.winui-slider` to override/customize the component's styles.

To customize the thumb into a box, use the class name `.has-box-indicator`.

## Examples

### Handling two-way binding

<Content-Example>

<div><Demo-Slider-Custom /></div>

<<< @/src/.vuepress/components/Demo/Slider/Custom.vue

</Content-Example>

<Misc-Ad />
