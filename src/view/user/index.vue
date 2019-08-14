<template>
  <div>
    <el-card>
      <div slot="header">
        <div>{{ getname }}</div>
        <el-form ref="form" v-model="listQuery" class="form" label-width="120px">
          <el-row :gutter="100">
            <el-col :span="8">
              <el-form-item label="广告ID：">
                <el-input v-model="listQuery.id" placeholder="请输入准确信息" clearable />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="最后修改时间：">
                <el-date-picker
                  v-model="listQuery.time"
                  type="daterange"
                  range-separator="-"
                  style="width:100%"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="getTime"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" @click="handleFilter()">
                搜索
              </el-button>
              <el-button @click="onReset">
                条件重置
              </el-button>
              <el-button type="success" @click="onAdd">
                创建广告
              </el-button>
              <!-- <el-button type="success" @click="onAdd">分类管理</el-button> -->
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>

import { getUserList } from '@/api/index'
export default {
  data() {
    return {
      listQuery: {},
      searchApi: getUserList,
      cities: [],
      treeData: [],
      props: {}
    }
  },
  computed: {
    getname: function(params) {
      return this.$store.getters['user/getname']
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      this.$store.commit('user/SET_NAME', 'meimei')
      this.$store
        .dispatch('user/login', {
          username: 'admin',
          password: 111111
        })
        .then(() => {})
        .catch(() => {})
    },
    handleUpdate() {},
    handleCheck() {},
    handleDelete() {},
    handleFilter(a) {},
    onAdd() {
      // this.$router.push(`advertManageEdit`);
    },
    onReset() {},
    getTime() {}
  }
}
</script>
<style lang='scss' scoped>
</style>
