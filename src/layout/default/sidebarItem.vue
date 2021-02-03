<template>

  <el-submenu v-if="item.children && item.children.length>0" :index="item.path" >
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>{{ item.name }}</span>
    </template>
    <!--    <sidebar-item v-for="child in item.children"-->
    <!--                  :key="child.path"-->
    <!--                  :is-nest="true"-->
    <!--                  :base-path="item.path"-->
    <!--                  :item="child"-->
    <!--                  class="nest-menu">-->
    <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :base-path="item.path"/>
    <!--          <el-menu-item index="item.path">信息列表</el-menu-item>-->
  </el-submenu>
  <el-menu-item v-else :index="(basePath==='/'?'':basePath)+item.path"   >{{ item.name }}</el-menu-item>


  <!--  <div v-if="!item.hidden" class="menu-wrapper">-->
  <!--    <template v-if="item.oneItem">-->
  <!--      <el-menu-item :index="'/'+item.children[0].path">-->
  <!--        <i :class="item.children[0].meta.icon" :style="'color:'+colors.type2"></i>-->
  <!--        <span slot="title">{{item.children[0].meta.title||item.name}}</span>-->
  <!--      </el-menu-item>-->
  <!--    </template>-->
  <!--    <template v-else-if="!item.children">-->
  <!--      <el-menu-item :index="(basePath==''?'':(basePath+'/'))+item.path">-->
  <!--        <i :class="item.meta.icon"></i>-->
  <!--        <span slot="title">{{item.meta.title||item.name}}</span>-->
  <!--      </el-menu-item>-->
  <!--    </template>-->

  <!--    <el-submenu v-else ref="subMenu" :index="(basePath=='/'?'':(basePath+'/'))+item.path" popper-append-to-body>-->
  <!--      <template slot="title">-->
  <!--        <i :class="item.meta.icon" :style="'color:'+colors.type2"></i>-->
  <!--        <span slot="title">{{item.meta.title||item.name}}</span>-->
  <!--      </template>-->
  <!--      <sidebar-item-->
  <!--        v-for="child in item.children"-->
  <!--        :key="child.path"-->
  <!--        :is-nest="true"-->
  <!--        :base-path="item.path"-->
  <!--        :item="child"-->
  <!--        class="nest-menu"/>-->
  <!--    </el-submenu>-->

  <!--  </div>-->


</template>

<script>
import Sidebar from './menu.vue';

export default {
  name: 'SidebarItem',
  components: {
    // Sidebar
  },
  props: {
    routes: {
      type: Array,
      default: () => []
    },   // route object
    item: {
      type: Object,
      default: () => {
      }
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      colors: this.$store.getters.theme || {type1: '#eff3fc', type2: '#409EFF'}
    }
  },

  computed: {
    defaultActive: function () {
      return this.$route.path
    },
  },
  created() {
    console.log(">>>>>>>>item", this.item);
  },
  mounted: function () {
  },
  methods: {
    genPath: function () {
      let arr = [...arguments]
      let path = arr.map(v => {
        while (v[0] === '/') {
          v = v.substring(1)
        }
        while (v[-1] === '/') {
          v = v.substring(0, v.length)
        }
        return v
      }).join('/')
      path = path[0] === '/' ? path : '/' + path
      return path
    },
    handleOpen: function (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose: function (key, keyPath) {
      console.log(key, keyPath)
    }
  },

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
///*@import "../styles/base.scss";*/
//.el-submenu, .el-menu-item {
//  background-color: #d1dff6;
//  /*background-color: black;*/
//}
//
//.el-submenu__title i {
//  /*color: #409EFF;*/
//  color: black;
//}
//
//.el-menu-item i:active {
//  /*color: #409EFF;*/
//  /*color: #ffffff;*/
//  color: black;
//}

/*.el-menu-item-group__title{*/
/**/
/*}*/

</style>
