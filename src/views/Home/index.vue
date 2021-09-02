<template>
  <div class="testone-class">
    <van-button type="warning" round size="large" @click="document">Xengine官方文档</van-button>
    <van-button type="primary" round size="large" @click="jumpQuery">测试: query带参跳转</van-button>
    <van-button
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      round
      size="large"
      @click="jumpParams"
    >测试: params带参跳转</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onNativeShow() {
      console.log("自定义生命周期,从b页面回到该页面后会调用该方法.请看打印")
    },
    document() {
      this.$engine.api(
        "com.zkty.jsi.direct",
        "push",
        {
          scheme: "http",
          host: "x-engine-1257400556.cos-website.ap-guangzhou.myqcloud.com",
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
    jumpQuery() {
      this.$router.push({
        path: "/testone",
        query: {
          id: 1,
          age: 18,
          name: "中文",
          changeNavTitle: "动态修改的title",
        },
      })
    },
    jumpParams() {
      this.$router.push({
        name: "testone",
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
  },
}
</script>

<style lang="less" scoped>
.testone-class {
  margin: 0 20px 20px 20px;
}
.van-button {
  margin-top: 10px;
}
</style>
