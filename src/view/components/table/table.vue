<!--  -->
<template>
  <div style="margin-top:20px;min-height:">
    <el-table
      v-loading="loading"
      ref="table"
      :data="tableData"
      :fit="fit"
      :stripe="stripe"
      border
      @sort-change="sortChange"
    >
      <slot name="columns" />
    </el-table>
    <div v-if="pagination">
      <el-pagination
        v-if="reload"
        :current-page="currentPage"
        :page-sizes="pageSize"
        :page-size="limit"
        :total="count"
        style="margin-top:10px"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    /* 列宽是否自撑开*/
    fit: {
      type: Boolean,
      default: true,
      required: false
    },
    /* 是否显示斑马纹*/
    stripe: {
      type: Boolean,
      default: true,
      required: false
    },
    /* 是否分页，默认分页*/
    pagination: {
      type: Boolean,
      default: true,
      required: false
    },
    /* 查询Api,方法*/
    searchApi: {
      type: Function,
      required: true
    },
    /* 分页数量选项*/
    pageSize: {
      type: Array,
      default: function() {
        return [10, 20, 30, 50];
      },
      required: false
    },
    /* 查询参数*/
    params: {
      type: Object,
      default() {
        return {
          query: {}
        };
      },
      required: false
    }
  },
  data() {
    return {
      tableData: [],
      count: 0,
      currentPage: 1,
      limit: 10,
      offset: 0,
      loading: false
    };
  },
  computed: {},
  created() {
    this.getData();
  },

  methods: {
    async getData() {
      var params = this.params;
      params.pageNum = this.currentPage;
      params.pageSize = this.limit;
      this.reload = false;
      this.loading = true;
      const result = await this.searchApi();
      this.tableData = result.data.data || [];
      this.count = result.data.data.total || 0;
      this.reload = true;
      this.loading = false;
    },
    /* 页码数量变化*/
    handleSizeChange(val) {
      this.limit = val;
      // this.getData();
    },
    /* 当前页变化事件*/
    handleCurrentChange(val) {
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.getData();
    },
    // 排序事件
    sortChange(data) {
      if (!data.order) {
        this.params.query["sortField"] = "";
        this.params.query["sortType"] = "";
        this.getData();
        return;
      }
      this.params.query["sortField"] = data.prop;
      this.params.query["sortType"] =
        data.order === "ascending" ? "ASC" : "DESC";
      this.getData();
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
