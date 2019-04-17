<template>
  <header class="top">
    <h1 class="title">后台管理系统</h1>
    <div class="userInfo">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="../../../static/img/user.jpg" class="user-logo">
          {{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: "admin"
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "loginout") {
        localStorage.removeItem("username");
        this.$router.push("/");
      }
    }
  },
  computed: {
    username() {
      let username = localStorage.getItem("username");
      return username ? username : this.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 70px;
  line-height: 70px;
  box-sizing: border-box;
  color: #fff;
  background-color: #242f42;
  .title {
    width: 250px;
    font-weight: normal;
    text-align: center;
    font-size: 22px;
    float: left;
  }
  .userInfo {
    float: right;
    width: 135px;
    padding-right: 40px;
    .el-dropdown-link {
      cursor: pointer;
      vertical-align: middle;
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      margin-top: 15px;
    }
    .user-logo {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }
  .el-dropdown-menu__item {
    line-height: 0;
    &:hover {
      background-color: none;
    }
  }
}
</style>
