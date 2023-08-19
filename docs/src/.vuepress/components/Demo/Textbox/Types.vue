<template>
  <div>
    <winui-textbox type="password" placeholder="Password" required />
    <winui-textbox type="email" placeholder="Email" />
    <winui-textbox type="number" placeholder="Number" />
    <winui-textbox type="textarea" value="Textarea" rows="5" />
  </div>
</template>

<style lang="stylus" scoped>
.winui-textbox {
  display: block;
  margin-bottom: 8px;
  min-width: 300px;
}
</style>