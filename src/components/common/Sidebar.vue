<template>
  <div class="menuList">
    <el-menu
      class="el-menu-vertical"
      unique-opened
      :default-active="onRoutes"
      router
      background-color="#2e363f"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
    >
      <template v-for="menu in menuList">
        <template v-if="menu.subs">
          <el-submenu :index="menu.index">
            <template slot="title">
              <i :class="menu.icon">
                <span>{{menu.title}}</span>
              </i>
            </template>
            <el-menu-item
              v-for="(subMenu,i) in menu.subs"
              :key="i"
              :index="subMenu.index"
            >{{subMenu.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="menu.index">
            <i :class="menu.icon"></i>
            {{menu.title}}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "自述",
          icon: "el-icon-setting",
          index: "welcome"
        },
        {
          title: "表格",
          icon: "el-icon-menu",
          index: "2",
          subs: [
            {
              title: "基础表格",
              index: "basetable"
            }
          ]
        },
        {
          title: "表单",
          icon: "el-icon-date",
          index: "3",
          subs: [
            {
              title: "基础表单",
              index: "baseform"
            }
          ]
        },
        {
          title: "图表",
          index: "basecharts",
          icon: "el-icon-star-on"
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: calc(100vh - 70px);
}
.el-submenu [class^="el-icon-"] {
  font-size: 16px;
}
.el-submenu__title * {
  margin-left: 5px;
}
</style>
