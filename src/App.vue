<template>
  <div id="app">
    <ZKTY-Header />
    <router-view :style="style" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {}
  },
  computed: {
    style() {
      return this.$engine.platform.isPc
        ? `margin-top:${64}px;`
        : `margin-top:${
            Number(this.$navigatorHeight) + Number(this.$statusHeight)
          }px;`
    },
  },
}
</script>

<style>
</style>
