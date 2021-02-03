<!--<template>-->
<!--    <div class="layout-menu">-->
<!--        <div class="menu-panel">-->
<!--            <el-menu class="el-menu-vertical-demo" background-color="#b3c0d1" text-color="#fff" active-text-color="#ffd04b" :default-active="this.$route.path" unique-opened router>-->
<!--                &lt;!&ndash; 角色管理 &ndash;&gt;-->
<!--                &lt;!&ndash; <el-submenu index="/role">-->
<!--                    <template slot="title">-->
<!--                        <i class="el-icon-menu"></i>-->
<!--                        <span>角色管理</span>-->
<!--                    </template>-->
<!--                    <el-menu-item index="/role">角色列表</el-menu-item>-->
<!--                </el-submenu> &ndash;&gt;-->
<!--                &lt;!&ndash; 教师管理 &ndash;&gt;-->
<!--                &lt;!&ndash; 学员管理 &ndash;&gt;-->
<!--                &lt;!&ndash; 信息管理 &ndash;&gt;-->
<!--                <el-submenu index="/information">-->
<!--                    <template slot="title">-->
<!--                        <i class="el-icon-menu"></i>-->
<!--                        <span>信息管理</span>-->
<!--                    </template>-->
<!--                    <el-menu-item index="/information">信息列表</el-menu-item>-->
<!--                </el-submenu>-->
<!--                &lt;!&ndash; 菜单管理 &ndash;&gt;-->
<!--                &lt;!&ndash; <el-submenu index="/menu">-->
<!--                    <template slot="title">-->
<!--                        <i class="el-icon-menu"></i>-->
<!--                        <span>菜单管理</span>-->
<!--                    </template>-->
<!--                    <el-menu-item index="/menu">菜单列表</el-menu-item>-->
<!--                </el-submenu> &ndash;&gt;-->
<!--                &lt;!&ndash; 系统设置 &ndash;&gt;-->
<!--                &lt;!&ndash; <el-submenu index="/system">-->
<!--                    <template slot="title">-->
<!--                        <i class="el-icon-menu"></i>-->
<!--                        <span>系统设置</span>-->
<!--                    </template>-->
<!--                    <el-menu-item index="/system">设置列表</el-menu-item>-->
<!--                </el-submenu> &ndash;&gt;-->
<!--            </el-menu>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<template>
  <!--  <div style="height: 100%;width:180px;top:69px;bottom: 1px;background-color:#fff">-->
  <div class="layout-menu">
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
             :default-active="this.$route.path" unique-opened router>
      <sidebar-item v-for="route in routes" :key="route.path" :item="route"/>
    </el-menu>
  </div>
</template>
<script>
import SidebarItem from './sidebarItem.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  data() {
    return {
      show: false,
      TabsValue: "",
      value: "",
      input: "",
      Tabs: [],
      // routes: this.$store.getters.permission_routers,
      routes: this.$router.options.routes,
      themes: this.$store.getters.theme || {type1: '#545c64', type2: '#fff', type3: '#ffd04b'},
      menus: this.$router.options.routes
    };

  },
  created() {
    // console.log(">>>>>>>>routes"+this.$route);
    console.log(">>>>>>>>routes");
    let arr = this.$router.options.routes
    for (let i = 0; i < arr.length; i++) {
      console.info(arr[i])

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.layout-menu {
  position: absolute;
  top: $layout-header-height;
  bottom: 0;
  left: 0;
  width: $layout-menu-width;
  // border-right: 1px solid $layout-menu-border-color;
  background-color: $layout-menu-background-color;
  z-index: 8;
  border-right: 1px solid #424242;

  .el-menu {
    border-right: 0;
  }

  .menu-panel {
    position: absolute;
    top: $layout-space;
    bottom: $layout-space;
    left: $layout-space;
    right: $layout-space;
    overflow: hidden;
    border-radius: $global-border-radius-width;

    .ivu-menu-light {
      height: 100%;
      width: 100%;
      border-right: 0;
      background-color: $layout-menu-background-color;
    }
  }
}
</style>
