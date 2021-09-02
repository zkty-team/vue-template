<template>
  <div class="testone-class">
    <van-button type="info" size="large" round @click="handlerBack">上一页</van-button>
    <h2>query的参数</h2>
    <div>{{query}}</div>
    <h2>params的参数</h2>
    <div>{{params}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      params: "",

    }
  },
  mounted() {
    this.query = this.$route.query
    this.params = this.$route.params
  },
  methods: {
    onNativeShow() {
      console.log("onNativeShow")
    },
    pushParams() {
      this.$router.push({
        name: "testtwo",
        params: {
          name: ["xxx", "oo", "中文"],
          age: {
            key1: 11,
            key2: 12,
          },
          haha: {
            key1: "qwerqwer",
            key2: 110,
          },
        },
      })
    },
    handlerBack() {
      this.$router.go(-1)
    },
    handlerOpenMicroApp() {
      this.$engine.api(
        "com.zkty.jsi.direct",
        "push",
        {
          scheme: "microapp",
          host: "com.gm.microapp.home",
          pathname: "",
          fragment: "",
          params: {
            hideNavbar: true,
          },
        },
        function (res) {
          console.log("res :>> ", res)
        }
      )
    },
  },
}
</script>

<style scoped>
.testone-class {
  margin: 0 20px;
}
.van-button {
  margin-top: 10px;
}
</style>
