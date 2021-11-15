<template>
  <el-container>
    <el-header>
      <el-button type="info" @click="logout">退出登录</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu background-color="#333744" :default-openeds="['1', '3']" text-color="#fff">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$message.error('退出登录')
      this.$router.push('/login')
    }

  }
}

</script>

<style>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #2b4b6b;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: wheat;
}
</style>
