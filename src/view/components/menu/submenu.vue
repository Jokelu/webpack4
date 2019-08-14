<!--  -->
<template>
  <div>
    <el-menu-item
      v-if="data.children == null || data.children.length == 0"
      :index="data.path"
      class="custom-submenu"
    >
      <i :class="data.icon || ''" />
      {{ data.name }}
    </el-menu-item>
    <el-submenu v-else :index="data.id.toString()" class="custom-submenu">
      <template slot="title">
        <i :class="data.icon || ''" />
        <span v-text="data.name" />
      </template>
      <sub-menu v-for="(item, index) in data.children" :key="index" :data="item" />
    </el-submenu>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Array, Object],
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  created() {},

  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
