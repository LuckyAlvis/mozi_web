<template>
  <div>
    <h3>用户组件</h3>
    <el-button @click="getUserList"></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 获取用户列表的参数
    }
  },
  created: {},
  methods: {
    getUserList () {
      this.$http.get('/order/101').then(response => {
        console.log(response)
      })
      // 经过 vue.config.js 配置文件的代理设置，会自动转为 https://www.baidu.com/，从而解决跨域问题
      // this.$http.get('/').then(response => {
      //   if (response.data) {
      //     console.log(response.data)
      //   }
      // })
    }
  }
}
</script>

<style>

</style>
