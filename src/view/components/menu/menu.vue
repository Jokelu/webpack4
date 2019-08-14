<!--  -->
<template>
  <el-menu :default-active="$route.path" router class="sub-menus" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <sub-menu v-for="(item) in data" :key="item.id" :data="item" />
  </el-menu>
</template>

<script>
import SubMenu from './submenu'
export default {
  components: {
    SubMenu
  },
  props: {
    data: {
      type: Array,
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
