# Tabs

<Content-Subtitle>Organize content into separate pages</Content-Subtitle>

<Misc-Ad />

## Usage

<Content-Example>

<div><Demo-Tabs-Basic /></div>

<<< @/src/.vuepress/components/Demo/Tabs/Basic.vue

</Content-Example>

## Props

### `tabs` <Badge text="required" type="error" />

- Type: `{ [key: string]: string }`
- Default: `undefined`

The tabs to display. The `key` is the tab id and the value is the tab label. The tab id must match the slot name (e.g `<template #tab1>` in the above [example](#usage)).

### `justified` <Badge text="optional" type="tip" />

- Type: `boolean`
- Default: `false`

Whether the tabs should be justified.

### `@change` <Badge text="optional" type="tip" />

- Type: `(tabId: string) => void`
- Default: `undefined`

The function to call when the active tab changes. The function will be called with the active tab ID as an argument.

## Customization

Use the class name `.winui-tabs` to override/customize the component's styles.

## Examples

### Justified tabs

<Content-Example>

<div><Demo-Tabs-Justified /></div>

<<< @/src/.vuepress/components/Demo/Tabs/Justified.vue

</Content-Example>

### Listen to tab change

<Content-Example>

<div><Demo-Tabs-Change /></div>

<<< @/src/.vuepress/components/Demo/Tabs/Change.vue

</Content-Example>

<Misc-Ad />
