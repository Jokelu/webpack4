<!--  -->
<template>
  <div class="container">
    <header class="header">Header</header>
    <div class="content">
      <div class="aside">
        <lf-menu :data="menu" style="width:100%"></lf-menu>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      menu: [
        {
          id: "1",
          name: "用户管理",
          path: null,
          icon: "el-icon-menu",
          children: [
            {
              id: "2",
              path: "/user",
              name: "用户列表",
              icon: ""
            }
          ]
        },
        {
          id: "3",
          path: null,
          name: "商品管理",
          icon: "el-icon-menu",
          children: [
            {
              id: "4",
              path: "/goods",
              name: "商品列表",
              icon: ""
            }
          ]
        }
      ]
    };
  },
  computed: {
  },
  mounted() {
    // axios
    //   .get("/api/deleteUser", {
    //     params: {
    //       id: 1
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {});
    // axios
    //   .post("/api/updataUser", {
    //     username: "dada",
    //     password: 111123153435511,
    //     id: 2
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {});
    // axios
    //   .post("/api/login", {
    //     username: "dada"
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {});
  },

  methods: {}
};
</script>
<style lang='scss'>
.container {
  height: 100%;
  .header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    width: 200px;
    line-height: 200px;
  }

  .main {
    width: 100%;
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    box-sizing: border-box;
    padding: 15px;
  }
}
</style>