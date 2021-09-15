<script setup lang="ts">
import { ElButton } from 'element-plus'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <el-button type="primary">app按钮</el-button>
  <br>
  <router-link :to="{ path: './page1' }">按我到子路由页面</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
