<!--  -->
<template>
  <div class="love">
    <div class="label">
      DownLoading LOVE from you
    </div>
    <el-progress
      class="progress"
      :text-inside="true"
      :stroke-width="18"
      :percentage="progress"
      status="exception"
    />
    <div class="label">
      Estimated time left: Unknown
    </div>
    <div class="label">
      Download to: my heart
    </div>
    <div class="fall">
      爱你，
      <br>我越陷越深......
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    }
  },
  created() {
    const time = setInterval(() => {
      this.progress += 1
      if (this.progress === 99) {
        clearInterval(time)
      }
    }, 1000)
  },

  methods: {}
}
</script>
<style lang='scss' scoped>
.love {
  padding: 20px;
  box-sizing: border-box;
  line-height: 25px;
  background: #f5f5f5;
  width: 100%;
  height: 100%;
}
.progress {
  margin: 20px 0;
}
.label {
  color: #f56c6c;
}
.fall {
  color: rgb(233, 61, 61);
  font-size: 35px;
  margin-top: 35px;
  white-space: wrap;
  line-height: 40px;
}
</style>
