# Searchbox

<Content-Subtitle>Allows searching for something</Content-Subtitle>

<Misc-Ad />

## Usage

The __Searchbox__ component comes in two variants: __instant search__ and __regular search__. The instant search displays the results as the user types. The regular search only perform a search for results when the user presses the enter key or clicks the search button.

<Content-Example>

<div><Demo-Searchbox-Basic /></div>

<<< @/src/.vuepress/components/Demo/Searchbox/Basic.vue

</Content-Example>

## Props

### `instant` <Badge text="optional" type="tip" />

- Type: `boolean`
- Default: `false`

Whether the search should be instant or not.

### `placeholder` <Badge text="optional" type="tip" />

- Type: `string`
- Default: `"Search"`

The placeholder text to display in the searchbox.

### `@search` <Badge text="optional" type="tip" />

- Type: `(query: string) => void`
- Default: `undefined`

The handler function that will be called when the user performs a search. The function will be called with the search query as an argument.

## Customization

Use the class name `.winui-searchbox` to override/customize the component's styles.

## Examples

### [Debouncing](https://css-tricks.com/debouncing-throttling-explained-examples/#aa-debounce) instant search

<Content-Example>

<div><Demo-Searchbox-Debounce /></div>

<<< @/src/.vuepress/components/Demo/Searchbox/Debounce.vue{13,18-21}

</Content-Example>

<Misc-Ad />
