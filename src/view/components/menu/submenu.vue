<!--  -->
<template>
  <div>
    <el-menu-item
      v-if="data.children == null || data.children.length == 0"
      :index="data.path"
      class="custom-submenu"
    >
      <i :class="data.icon || ''"></i>
      {{data.name}}
    </el-menu-item>
    <el-submenu v-else :index="data.id.toString()" class="custom-submenu">
      <template slot="title">
        <i :class="data.icon || ''"></i>
        <span v-text="data.name"></span>
      </template>
      <sub-menu :data="item" v-for="(item, index) in data.children" :key="index"></sub-menu>
    </el-submenu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: [Array, Object],
      default() {
        return [];
      }
    }
  },
  created() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>