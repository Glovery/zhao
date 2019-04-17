<template>
  <div class="wrapper">
    <m-head></m-head>
    <el-row>
      <el-col :span="3">
        <sidebar></sidebar>
      </el-col>
      <el-col :span="21">
        <div class="content">
          <transition name="move" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import mHead from "../common/Head";
import Sidebar from "../common/Sidebar";
export default {
  components: {
    mHead,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 40px;
}
</style>

