<template>
  <div class="page1">
    page1
    <el-button>page1按钮</el-button>
    <el-checkbox-group v-model="order">
      <el-checkbox label="1">店播订单</el-checkbox>
      <el-checkbox label="2">分销订单</el-checkbox>
      <el-checkbox label="3">其他订单</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElCheckbox, ElCheckboxGroup } from 'element-plus'
const order = ref([])
console.log(order.value)
</script>
<style>
.page1 {
  margin-top: 20px;
}
</style>
