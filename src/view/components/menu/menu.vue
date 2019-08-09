<!--  -->
<template>
  <el-menu :default-active="$route.path" router class="sub-menus" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <sub-menu :data="item" v-for="(item) in data" :key="item.id"></sub-menu>
  </el-menu>
</template>

<script>
import SubMenu from "./submenu";
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    SubMenu
  },
  created() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>