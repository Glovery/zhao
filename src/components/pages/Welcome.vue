<template>
  <div class="wrapper">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-setting"></i>自述
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="doc">
      <h3 class="title">自述</h3>
      <article>
        <h1>vue-manage-system</h1>
        <p>基于vue.js 2.x系列与elementUI的后台管理系统</p>
        <h2>前言</h2>
        <p>想尝试自己完成一个后台管理系统的展示。该系统是基于vue.js ，使用vue-cli脚手架快速生成项目目录，引用elementUI组件库。</p>
        <h2>功能</h2>
        <el-checkbox disabled checked>elementUI</el-checkbox>
        <br>
        <el-checkbox disabled checked>登录注册</el-checkbox>
        <br>
        <el-checkbox disabled checked>表格</el-checkbox>
        <br>
        <el-checkbox disabled checked>表单</el-checkbox>
        <br>
        <el-checkbox disabled checked>图表</el-checkbox>
      </article>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0px 20px;
  .doc {
    width: 1000px;
    margin-top: 20px;
    .title {
      height: 17px;
      line-height: 17px;
      padding: 10px;
      font-size: 14px;
      border: 1px solid #d8d8d8;
      border-bottom: none;
      background-color: #f5f5f5;
    }
    article {
      padding: 45px;
      border: 1px solid #ddd;
      h1,
      h2 {
        font-size: 32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
      }
      p {
        margin-bottom: 15px;
        line-height: 1.5;
      }
      .el-checkbox {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
